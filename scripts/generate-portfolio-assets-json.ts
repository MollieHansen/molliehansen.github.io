import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { PortfolioSection } from '../src/shared/models/portfolio-section.enum';
import { PORTFOLIO_METADATA } from '../src/app/pages/portfolio/data/portfolio-metadata';
import { ProjectImage } from '../src/app/pages/portfolio/data/project-image.model';

async function main() {
  const imageExtensions = /\.(jpe?g|png|webp)$/i;

  const baseAssetsPath = path.resolve(__dirname, '../src/assets/portfolio');
  const output: Record<PortfolioSection, any> = {} as Record<PortfolioSection, any>;

  const processed: string[] = [];
  const warnings: string[] = [];

  const thumbnailWidth = 480; // thumbnail width in pixels

  // Loop over defined metadata sections
  for (const section of Object.keys(PORTFOLIO_METADATA) as PortfolioSection[]) {
    const sectionPath = path.join(baseAssetsPath, section);
    const thumbnailPath = path.join(sectionPath, 'thumbnails');

    if (!fs.existsSync(thumbnailPath)) {
      fs.mkdirSync(thumbnailPath, { recursive: true });
    }

    const files = fs.existsSync(sectionPath) ? fs.readdirSync(sectionPath) : [];

    const images: ProjectImage[] = [];

    for (const file of files) {
      if (!imageExtensions.test(file)) continue;

      const fullPath = path.join(sectionPath, file);
      const thumbnailFileName = `thumb-${file}`;
      const thumbnailFullPath = path.join(thumbnailPath, thumbnailFileName);
      const thumbnailFilePath = `assets/portfolio/${section}/thumbnails/${thumbnailFileName}`;

      // Generate thumbnail if it doesn't exist
      if (!fs.existsSync(thumbnailFullPath)) {
        await sharp(fullPath)
          .resize(thumbnailWidth)
          .toFile(thumbnailFullPath);
        console.log(`🖼️  Generated thumbnail: ${thumbnailFilePath}`);
      }

      images.push({
        assetFilePath: `assets/portfolio/${section}/${file}`,
        thumbnailFilePath: thumbnailFilePath
      });
    }

    if (files.length && images.length === 0) {
      warnings.push(`⚠️  '${section}' has files but no valid images.`);
    } else if (!files.length) {
      warnings.push(`⚠️  '${section}' does not exist or is empty.`);
    } else {
      processed.push(`✅ '${section}' loaded with ${images.length} image(s).`);
    }

    output[section] = {
      ...PORTFOLIO_METADATA[section],
      images,
      heroImage: images[0] ?? { title: '', assetFilePath: '', thumbnailFilePath: '' }
    };
  }

  // Save to JSON
  const outputFile = path.join(baseAssetsPath, 'portfolio-sections.json');
  fs.writeFileSync(outputFile, JSON.stringify(output, null, 2));

  console.log('\n📦 Portfolio Sections Summary:\n');

  for (const msg of processed) console.log(msg);
  for (const msg of warnings) console.warn(msg);

  console.log(`\n💾 Output saved to: ${outputFile}\n`);
}

main().catch(err => {
  console.error('❌ Error generating portfolio:', err);
  process.exit(1);
});