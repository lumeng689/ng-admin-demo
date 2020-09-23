import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealtimeNoticeComponent } from './realtime-notice.component';

describe('RealtimeNoticeComponent', () => {
  let component: RealtimeNoticeComponent;
  let fixture: ComponentFixture<RealtimeNoticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RealtimeNoticeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RealtimeNoticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
