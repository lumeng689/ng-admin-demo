import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfraHealthComponent } from './infra-health.component';

describe('InfraHealthComponent', () => {
  let component: InfraHealthComponent;
  let fixture: ComponentFixture<InfraHealthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfraHealthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfraHealthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
