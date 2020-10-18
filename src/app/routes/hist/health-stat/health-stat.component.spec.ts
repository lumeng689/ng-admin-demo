import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthStatComponent } from './health-stat.component';

describe('HealthStatComponent', () => {
  let component: HealthStatComponent;
  let fixture: ComponentFixture<HealthStatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HealthStatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthStatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
