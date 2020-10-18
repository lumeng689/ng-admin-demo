import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SysDataListComponent } from './sys-data-list.component';

describe('SysDataListComponent', () => {
  let component: SysDataListComponent;
  let fixture: ComponentFixture<SysDataListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SysDataListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SysDataListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
