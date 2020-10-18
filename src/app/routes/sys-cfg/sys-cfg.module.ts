import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared';
import { SysCfgRoutingModule } from './sys-cfg-routing.module';
import { SysCfgListComponent } from './sys-cfg-list/sys-cfg-list.component';


@NgModule({
  declarations: [SysCfgListComponent],
  imports: [
    CommonModule,
    SharedModule,
    SysCfgRoutingModule
  ]
})
export class SysCfgModule { }
