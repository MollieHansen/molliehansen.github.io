import { PortfolioSection } from '../../../../shared/models/portfolio-section.enum';
import { ProjectImage } from './project-image.model';
import { ProjectVideo } from './project-video.model';

export interface PortfolioSectionContent {
  title: string
  description: string
  materials: string
  size?: string
  year: string
  images: ProjectImage[]
  heroImage: ProjectImage,
  videos: ProjectVideo[],
  videoFirst?: boolean
}

export type PORTFOLIO_SECTIONS = Record<PortfolioSection, PortfolioSectionContent>