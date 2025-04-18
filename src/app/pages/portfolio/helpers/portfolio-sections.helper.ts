import { PortfolioSection } from "../../../../shared/models/portfolio-section.enum"

export function getAbsolutePortfolioRoute(section: PortfolioSection): string {
  return `/portfolio/${section}`
}