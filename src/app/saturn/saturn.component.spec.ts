import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaturnComponent } from './saturn.component';

describe('SaturnComponent', () => {
  let component: SaturnComponent;
  let fixture: ComponentFixture<SaturnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaturnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaturnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
