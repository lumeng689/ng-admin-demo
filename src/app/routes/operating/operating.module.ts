import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared';
import { OperatingRoutingModule } from './operating-routing.module';
import {InfraHealthComponent} from './infra-health/infra-health.component';

const COMPONENTS = [
  InfraHealthComponent
];
const COMPONENTS_NOROUNT = [];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    OperatingRoutingModule
  ],
  declarations: [...COMPONENTS, ...COMPONENTS_NOROUNT],
  entryComponents: COMPONENTS_NOROUNT,
})
export class OperatingModule { }
