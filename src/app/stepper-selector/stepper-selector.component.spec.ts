import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperSelectorComponent } from './stepper-selector.component';

describe('StepperSelectorComponent', () => {
  let component: StepperSelectorComponent;
  let fixture: ComponentFixture<StepperSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepperSelectorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepperSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
