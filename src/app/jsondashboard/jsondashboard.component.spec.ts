import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsondashboardComponent } from './jsondashboard.component';

describe('JsondashboardComponent', () => {
  let component: JsondashboardComponent;
  let fixture: ComponentFixture<JsondashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsondashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsondashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
