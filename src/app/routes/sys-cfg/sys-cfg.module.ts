import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared';
import { SysCfgRoutingModule } from './sys-cfg-routing.module';
import { SysCfgListComponent } from './sys-cfg-list/sys-cfg-list.component';
import { CfgFormComponent } from './cfg-form/cfg-form.component';
import { CfgDetailComponent } from './cfg-detail/cfg-detail.component';

const COMPONENTS = [SysCfgListComponent];

const COMPONENTS_NOROUNT = [CfgDetailComponent, CfgFormComponent];

@NgModule({
  declarations: [...COMPONENTS, ...COMPONENTS_NOROUNT],
  imports: [
    CommonModule,
    SharedModule,
    SysCfgRoutingModule,
  ],
  entryComponents: [...COMPONENTS_NOROUNT],
})
export class SysCfgModule {
}
