import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SysCfgListComponent } from './sys-cfg-list.component';

describe('SysCfgListComponent', () => {
  let component: SysCfgListComponent;
  let fixture: ComponentFixture<SysCfgListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SysCfgListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SysCfgListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
