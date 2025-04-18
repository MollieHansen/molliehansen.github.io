import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { getAbsolutePortfolioRoute } from './helpers/portfolio-sections.helper';
import { PortfolioDataService } from './data/portfolio-data.service';
import { PortfolioSection } from '../../../shared/models/portfolio-section.enum';
import { PortfolioSectionContent } from './data/portfolio-sections.config';
import { AsyncPipe } from '@angular/common';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [RouterModule, AsyncPipe],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  sectionEntries$: Observable<[PortfolioSection, PortfolioSectionContent][]>

  getRoute = getAbsolutePortfolioRoute;

  constructor(private dataService: PortfolioDataService) {
    this.sectionEntries$ = this.dataService.getSections().pipe(
      map(sections => Object.entries(sections) as [PortfolioSection, PortfolioSectionContent][])
    )
  }
}
