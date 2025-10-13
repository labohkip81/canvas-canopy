import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchSectionComponent } from './arch-section.component';

describe('ArchSectionComponent', () => {
  let component: ArchSectionComponent;
  let fixture: ComponentFixture<ArchSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArchSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArchSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
