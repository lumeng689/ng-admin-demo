import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentFailForecastComponent } from './equipment-fail-forecast.component';

describe('EquipmentFailForecastComponent', () => {
  let component: EquipmentFailForecastComponent;
  let fixture: ComponentFixture<EquipmentFailForecastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquipmentFailForecastComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipmentFailForecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
