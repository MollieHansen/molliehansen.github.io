import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PortfolioSectionContent } from './portfolio-sections.config';
import { PortfolioSection } from '../../../../shared/models/portfolio-section.enum';
import { Observable, map, shareReplay } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PortfolioDataService {
  private configUrl = 'assets/portfolio/portfolio-sections.json'
  private config$: Observable<Record<PortfolioSection, PortfolioSectionContent>>

  constructor(private http: HttpClient) {
    this.config$ = this.http.get<Record<PortfolioSection, PortfolioSectionContent>>('assets/portfolio/portfolio-sections.json').pipe(
      shareReplay(1)
    );
  }
  getSections(): Observable<Record<PortfolioSection, PortfolioSectionContent>> {
    return this.config$
  }

  getSection(section: PortfolioSection): Observable<PortfolioSectionContent | undefined> {
    return this.config$.pipe(map(config => config[section]))
  }
}
