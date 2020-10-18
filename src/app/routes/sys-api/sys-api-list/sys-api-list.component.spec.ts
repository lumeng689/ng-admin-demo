import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SysApiListComponent } from './sys-api-list.component';

describe('SysApiListComponent', () => {
  let component: SysApiListComponent;
  let fixture: ComponentFixture<SysApiListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SysApiListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SysApiListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
