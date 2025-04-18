import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ResumeComponent } from './pages/resume/resume.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { DynamicPortfolioPageComponent } from './pages/portfolio/dynamic-portfolio-page.component';

export const routes: Routes = [
  { path: '', component: PortfolioComponent },
  { path: 'about', component: AboutComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'contact', component: ContactComponent },
  { 
    path: 'portfolio',
    children: [
      { path: '', component: PortfolioComponent },
      { path: ':section', component: DynamicPortfolioPageComponent }
    ]
 }
];
