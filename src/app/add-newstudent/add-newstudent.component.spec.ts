import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewstudentComponent } from './add-newstudent.component';

describe('AddNewstudentComponent', () => {
  let component: AddNewstudentComponent;
  let fixture: ComponentFixture<AddNewstudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewstudentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddNewstudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
