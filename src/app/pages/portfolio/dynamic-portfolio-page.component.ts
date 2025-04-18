import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PortfolioSectionContent } from './data/portfolio-sections.config';
import { PortfolioSection } from '../../../shared/models/portfolio-section.enum';
import { PortfolioDataService } from './data/portfolio-data.service';
import { BasePortfolioPageComponent } from './base-portfolio-page.component';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule, BasePortfolioPageComponent],
  selector: 'app-dynamic-portfolio-page',
  template: `
    @if (section) {
      <app-base-portfolio-page
        [title]="section.title"
        [description]="section.description"
        [year]="section.year"
        [materials]="section.materials"
        [images]="section.images"
      />
    }
    @if (!section) {
      <div class="text-center pt-24 text-gray-500">Section not found</div>
    }
  `,
})
export class DynamicPortfolioPageComponent {
  section: PortfolioSectionContent | null = null;

  constructor(route: ActivatedRoute, private dataService: PortfolioDataService) {
    const key = route.snapshot.paramMap.get('section') as PortfolioSection;
    this.dataService.getSection(key).subscribe(data => {
      this.section = data ?? null;
    });
  }
}
