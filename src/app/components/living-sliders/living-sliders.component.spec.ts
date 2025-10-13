import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivingSlidersComponent } from './living-sliders.component';

describe('LivingSlidersComponent', () => {
  let component: LivingSlidersComponent;
  let fixture: ComponentFixture<LivingSlidersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LivingSlidersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LivingSlidersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
