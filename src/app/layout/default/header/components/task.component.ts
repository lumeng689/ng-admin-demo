import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'header-task',
  template: `
    <div
      class="alain-default__nav-item"
      nz-dropdown
      [nzDropdownMenu]="taskMenu"
      nzTrigger="click"
      nzPlacement="bottomRight"
      (nzVisibleChange)="change()"
    >
      <nz-badge [nzDot]="true">
        <i nz-icon nzType="bell" class="alain-default__nav-item-icon"></i>
      </nz-badge>
    </div>
    <nz-dropdown-menu #taskMenu="nzDropdownMenu">
      <div nz-menu class="wd-lg">
        <div *ngIf="loading" class="mx-lg p-lg"><nz-spin></nz-spin></div>
        <nz-card *ngIf="!loading" nzTitle="告警列表" nzBordered="false" class="ant-card__body-nopadding">
          <ng-template #extra><i nz-icon nzType="plus"></i></ng-template>
          <div nz-row [nzType]="'flex'" [nzJustify]="'center'" [nzAlign]="'middle'" class="py-sm point">
            <div nz-col [nzSpan]="4" class="text-center">
              <nz-avatar [nzSrc]="'./assets/tmp/img/door.jpg'"></nz-avatar>
            </div>
            <div nz-col [nzSpan]="20">
              <strong>屏蔽门</strong>
              <p class="mb0">1号屏蔽门出现故障.</p>
            </div>
          </div>
          <div nz-row [nzType]="'flex'" [nzJustify]="'center'" [nzAlign]="'middle'" class="py-sm point">
            <div nz-col [nzSpan]="4" class="text-center">
              <nz-avatar [nzSrc]="'./assets/tmp/img/lift.jpg'"></nz-avatar>
            </div>
            <div nz-col [nzSpan]="20">
              <strong>电梯</strong>
              <p class="mb0">2号电梯出现故障，请迅速派人进行查看</p>
            </div>
          </div>
          <div nz-row>
            <div nz-col [nzSpan]="24" class="pt-md border-top-1 text-center text-grey point">
              查看全部消息
            </div>
          </div>
        </nz-card>
      </div>
    </nz-dropdown-menu>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderTaskComponent {
  loading = true;

  constructor(private cdr: ChangeDetectorRef) {}

  change(): void {
    setTimeout(() => {
      this.loading = false;
      this.cdr.detectChanges();
    }, 500);
  }
}
