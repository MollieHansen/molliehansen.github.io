import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ResumeComponent } from './pages/resume/resume.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { DynamicPortfolioPageComponent } from './pages/portfolio/dynamic-portfolio-page.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, data: { animation: 'Home' }},
  { path: 'about', component: AboutComponent, data: { animation: 'About' } },
  { path: 'resume', component: ResumeComponent, data: { animation: 'Resume' } },
  { path: 'contact', component: ContactComponent, data: { animation: 'Contact' } },
  { 
    path: 'portfolio',
    children: [
      { path: '', component: PortfolioComponent, data: { animation: 'Portfolio' } },
      { path: ':section', component: DynamicPortfolioPageComponent, data: { animation: 'DynamicPortfolio' } }
    ]
 }
];
