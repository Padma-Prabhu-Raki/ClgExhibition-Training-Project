import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleSidenavComponent } from './toggle-sidenav.component';

describe('ToggleSidenavComponent', () => {
  let component: ToggleSidenavComponent;
  let fixture: ComponentFixture<ToggleSidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToggleSidenavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToggleSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
