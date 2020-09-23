import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrelationAnalysisComponent } from './correlation-analysis.component';

describe('CorrelationAnalysisComponent', () => {
  let component: CorrelationAnalysisComponent;
  let fixture: ComponentFixture<CorrelationAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorrelationAnalysisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorrelationAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
