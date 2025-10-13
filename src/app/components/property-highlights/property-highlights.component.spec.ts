import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyHighlightsComponent } from './property-highlights.component';

describe('PropertyHighlightsComponent', () => {
  let component: PropertyHighlightsComponent;
  let fixture: ComponentFixture<PropertyHighlightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PropertyHighlightsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PropertyHighlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
