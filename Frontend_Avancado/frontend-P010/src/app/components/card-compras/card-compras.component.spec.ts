import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardComprasComponent } from './card-compras.component';

describe('CardComprasComponent', () => {
  let component: CardComprasComponent;
  let fixture: ComponentFixture<CardComprasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardComprasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardComprasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
