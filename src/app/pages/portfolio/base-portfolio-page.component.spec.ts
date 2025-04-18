import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasePortfolioPageComponent } from './base-portfolio-page.component';

describe('BasePortfolioPageComponent', () => {
  let component: BasePortfolioPageComponent;
  let fixture: ComponentFixture<BasePortfolioPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasePortfolioPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasePortfolioPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
