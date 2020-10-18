import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared';
import { SysDataRoutingModule } from './sys-data-routing.module';
import { SysDataListComponent } from './sys-data-list/sys-data-list.component';

const COMPONENTS = [];

const COMPONENTS_NOROUNT = [];

@NgModule({
  declarations: [SysDataListComponent],
  imports: [
    CommonModule,
    SharedModule,
    SysDataRoutingModule
  ],
  entryComponents: [...COMPONENTS_NOROUNT]
})
export class SysDataModule { }
