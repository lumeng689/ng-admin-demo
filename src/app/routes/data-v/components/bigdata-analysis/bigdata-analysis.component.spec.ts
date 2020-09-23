import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigdataAnalysisComponent } from './bigdata-analysis.component';

describe('BigdataAnalysisComponent', () => {
  let component: BigdataAnalysisComponent;
  let fixture: ComponentFixture<BigdataAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BigdataAnalysisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BigdataAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
