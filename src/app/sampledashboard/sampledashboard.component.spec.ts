import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampledashboardComponent } from './sampledashboard.component';

describe('SampledashboardComponent', () => {
  let component: SampledashboardComponent;
  let fixture: ComponentFixture<SampledashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SampledashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SampledashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
