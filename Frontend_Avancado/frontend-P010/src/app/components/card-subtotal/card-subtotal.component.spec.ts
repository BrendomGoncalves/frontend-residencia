import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSubtotalComponent } from './card-subtotal.component';

describe('CardSubtotalComponent', () => {
  let component: CardSubtotalComponent;
  let fixture: ComponentFixture<CardSubtotalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardSubtotalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardSubtotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
