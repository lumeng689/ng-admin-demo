import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfraMonitorComponent } from './infra-monitor.component';

describe('InfraMonitorComponent', () => {
  let component: InfraMonitorComponent;
  let fixture: ComponentFixture<InfraMonitorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfraMonitorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfraMonitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
