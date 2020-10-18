import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared';
import { SysApiRoutingModule } from './sys-api-routing.module';
import { SysApiListComponent } from './sys-api-list/sys-api-list.component';


@NgModule({
  declarations: [SysApiListComponent],
  imports: [
    CommonModule,
    SharedModule,
    SysApiRoutingModule
  ]
})
export class SysApiModule { }
