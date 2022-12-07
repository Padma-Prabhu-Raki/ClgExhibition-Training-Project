import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollegeExhibitionComponent } from './college-exhibition.component';

describe('CollegeExhibitionComponent', () => {
  let component: CollegeExhibitionComponent;
  let fixture: ComponentFixture<CollegeExhibitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollegeExhibitionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollegeExhibitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
