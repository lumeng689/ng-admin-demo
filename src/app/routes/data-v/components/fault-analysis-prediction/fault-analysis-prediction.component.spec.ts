import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaultAnalysisPredictionComponent } from './fault-analysis-prediction.component';

describe('FaultAnalysisPredictionComponent', () => {
  let component: FaultAnalysisPredictionComponent;
  let fixture: ComponentFixture<FaultAnalysisPredictionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaultAnalysisPredictionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FaultAnalysisPredictionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
