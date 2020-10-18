import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared';
import { SysApiRoutingModule } from './sys-api-routing.module';
import { SysApiListComponent } from './sys-api-list/sys-api-list.component';

const COMPONENTS = [SysApiListComponent];

const COMPONENTS_NOROUNT = [];

@NgModule({
  declarations: [...COMPONENTS, ...COMPONENTS_NOROUNT],
  imports: [
    CommonModule,
    SharedModule,
    SysApiRoutingModule
  ],
  entryComponents: [...COMPONENTS_NOROUNT]
})
export class SysApiModule { }
