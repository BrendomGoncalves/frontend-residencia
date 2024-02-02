import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberViewerComponent } from './numberviewer.component';

describe('NumberViewerComponent', () => {
  let component: NumberViewerComponent;
  let fixture: ComponentFixture<NumberViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NumberViewerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NumberViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
