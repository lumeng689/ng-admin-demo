import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfraFailAnalysisComponent } from './infra-fail-analysis.component';

describe('InfraFailAnalysisComponent', () => {
  let component: InfraFailAnalysisComponent;
  let fixture: ComponentFixture<InfraFailAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfraFailAnalysisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfraFailAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
