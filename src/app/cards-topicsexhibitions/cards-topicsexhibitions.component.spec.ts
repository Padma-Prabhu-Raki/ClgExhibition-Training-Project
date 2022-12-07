import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsTopicsexhibitionsComponent } from './cards-topicsexhibitions.component';

describe('CardsTopicsexhibitionsComponent', () => {
  let component: CardsTopicsexhibitionsComponent;
  let fixture: ComponentFixture<CardsTopicsexhibitionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsTopicsexhibitionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardsTopicsexhibitionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
