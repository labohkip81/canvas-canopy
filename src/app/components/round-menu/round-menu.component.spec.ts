import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoundMenuComponent } from './round-menu.component';

describe('RoundMenuComponent', () => {
  let component: RoundMenuComponent;
  let fixture: ComponentFixture<RoundMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoundMenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RoundMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
