import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompinteractdetailsComponent } from './compinteractdetails.component';

describe('CompinteractdetailsComponent', () => {
  let component: CompinteractdetailsComponent;
  let fixture: ComponentFixture<CompinteractdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompinteractdetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompinteractdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
