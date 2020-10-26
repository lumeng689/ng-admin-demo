import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayerBtnComponent } from './layer-btn.component';

describe('LayerBtnComponent', () => {
  let component: LayerBtnComponent;
  let fixture: ComponentFixture<LayerBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayerBtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayerBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
