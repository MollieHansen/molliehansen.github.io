import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { execSync } from 'child_process';
import { PortfolioSection } from '../src/shared/models/portfolio-section.enum';
import { PORTFOLIO_METADATA } from '../src/app/pages/portfolio/data/portfolio-metadata';
import { ProjectImage } from '../src/app/pages/portfolio/data/project-image.model';
import { ProjectVideo } from '../src/app/pages/portfolio/data/project-video.model';

function getVideoDurationInSeconds(filePath: string): number {
  try {
    const result = execSync(
      `ffprobe -v error -select_streams v:0 -show_entries format=duration -of default=noprint_wrappers=1:nokey=1 "${filePath}"`
    )
      .toString()
      .trim();
    return parseFloat(result);
  } catch (err) {
    console.error(`❌ Failed to get video duration for ${filePath}`, err);
    return 0;
  }
}

async function main() {
  const imageExtensions = /\.(jpe?g|png|webp)$/i;
  const videoExtensions = /\.(mp4)$/i;

  const baseAssetsPath = path.resolve(__dirname, '../src/assets/portfolio');
  const output: Record<PortfolioSection, any> = {} as Record<PortfolioSection, any>;

  const processed: string[] = [];
  const warnings: string[] = [];

  const thumbnailWidth = 480;

  for (const section of Object.keys(PORTFOLIO_METADATA) as PortfolioSection[]) {
    const sectionPath = path.join(baseAssetsPath, section);
    const thumbnailPath = path.join(sectionPath, 'thumbnails');

    if (!fs.existsSync(thumbnailPath)) {
      fs.mkdirSync(thumbnailPath, { recursive: true });
    }

    const files = fs.existsSync(sectionPath) ? fs.readdirSync(sectionPath) : [];

    const images: ProjectImage[] = [];
    const videos: ProjectVideo[] = [];

    for (const file of files) {
      const isImage = imageExtensions.test(file);
      const isVideo = videoExtensions.test(file);
      if (!isImage && !isVideo) continue;

      const fullPath = path.join(sectionPath, file);
      const baseName = file.replace(path.extname(file), '');
      const thumbnailFileName = `thumb-${baseName}.jpg`;
      const thumbnailFullPath = path.join(thumbnailPath, thumbnailFileName);
      const thumbnailFilePath = `assets/portfolio/${section}/thumbnails/${thumbnailFileName}`;

      if (!fs.existsSync(thumbnailFullPath)) {
        try {
          if (isImage) {
            await sharp(fullPath).resize(thumbnailWidth).toFile(thumbnailFullPath);
            console.log(`🖼️  Image thumbnail: ${thumbnailFilePath}`);
          } else if (isVideo) {
            const duration = getVideoDurationInSeconds(fullPath);
            const middleTime = Math.max(duration / 2, 0.5).toFixed(2); // fallback to 0.5s if duration unknown
            execSync(
              `ffmpeg -y -ss ${middleTime} -i "${fullPath}" -vframes 1 -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" -pix_fmt yuv420p "${thumbnailFullPath}"`
            );
            console.log(`🎞️  Video thumbnail (mid-frame @ ${middleTime}s): ${thumbnailFilePath}`);
          }
        } catch (err) {
          console.error(`❌ Failed to generate thumbnail for ${file}:`, err);
          continue;
        }
      }

      if (isImage) {
        images.push({
          assetFilePath: `assets/portfolio/${section}/${file}`,
          thumbnailFilePath
        });
      } else if (isVideo) {
        videos.push({
          assetFilePath: `assets/portfolio/${section}/${file}`,
          thumbnailFilePath
        });
      }
    }

    if (files.length === 0) {
      warnings.push(`⚠️  '${section}' does not exist or is empty.`);
    } else {
      processed.push(`✅ '${section}' → ${images.length} image(s), ${videos.length} video(s)`);
    }

    output[section] = {
      ...PORTFOLIO_METADATA[section],
      images,
      videos,
      heroImage: images[0] ?? { title: '', assetFilePath: '', thumbnailFilePath: '' }
    };
  }

  const outputFile = path.join(baseAssetsPath, 'portfolio-sections.json');
  fs.writeFileSync(outputFile, JSON.stringify(output, null, 2));

  console.log('\n📦 Portfolio Sections Summary:\n');
  processed.forEach(msg => console.log(msg));
  warnings.forEach(msg => console.warn(msg));
  console.log(`\n💾 Output saved to: ${outputFile}\n`);
}

main().catch(err => {
  console.error('❌ Error generating portfolio:', err);
  process.exit(1);
});
