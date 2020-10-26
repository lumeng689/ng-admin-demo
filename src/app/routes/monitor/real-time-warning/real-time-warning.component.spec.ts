import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealTimeWarningComponent } from './real-time-warning.component';

describe('RealTimeWarningComponent', () => {
  let component: RealTimeWarningComponent;
  let fixture: ComponentFixture<RealTimeWarningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RealTimeWarningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RealTimeWarningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
