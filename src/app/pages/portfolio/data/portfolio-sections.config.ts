import { PortfolioSection } from '../../../../shared/models/portfolio-section.enum';
import { ProjectImage } from './project-image.model';

export interface PortfolioSectionContent {
  title: string
  description: string
  materials: string
  size?: string
  year: string
  images: ProjectImage[]
  heroImage: ProjectImage
}

export type PORTFOLIO_SECTIONS = Record<PortfolioSection, PortfolioSectionContent>