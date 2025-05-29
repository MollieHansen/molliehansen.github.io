import fs from 'fs';
import path from 'path';
import { PortfolioSection } from '../src/shared/models/portfolio-section.enum';
import { PORTFOLIO_METADATA } from '../src/app/pages/portfolio/data/portfolio-metadata';

function cleanThumbnails() {
  const baseAssetsPath = path.resolve(__dirname, '../src/assets/portfolio');

  const deleted: string[] = [];
  const notFound: string[] = [];

  for (const section of Object.keys(PORTFOLIO_METADATA) as PortfolioSection[]) {
    const thumbnailPath = path.join(baseAssetsPath, section, 'thumbnails');

    if (fs.existsSync(thumbnailPath)) {
      const files = fs.readdirSync(thumbnailPath);

      for (const file of files) {
        const filePath = path.join(thumbnailPath, file);
        try {
          fs.unlinkSync(filePath);
          deleted.push(filePath);
        } catch (err) {
          console.warn(`⚠️ Failed to delete: ${filePath}`, err);
        }
      }

      // Optionally remove the directory itself
      fs.rmdirSync(thumbnailPath);
      console.log(`🧹 Deleted directory: ${thumbnailPath}`);
    } else {
      notFound.push(thumbnailPath);
    }
  }

  console.log('\n🗑️ Cleaned Thumbnails Summary:\n');
  deleted.forEach(f => console.log(`✅ Deleted: ${f}`));
  notFound.forEach(f => console.warn(`⚠️ Not found: ${f}`));
}

cleanThumbnails();
