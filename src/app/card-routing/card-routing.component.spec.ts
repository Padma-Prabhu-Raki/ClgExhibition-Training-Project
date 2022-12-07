import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardRoutingComponent } from './card-routing.component';

describe('CardRoutingComponent', () => {
  let component: CardRoutingComponent;
  let fixture: ComponentFixture<CardRoutingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardRoutingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
