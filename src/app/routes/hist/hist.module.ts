import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared';
import { HistRoutingModule } from './hist-routing.module';
import {InfraFailAnalysisComponent} from './infra-fail-analysis/infra-fail-analysis.component';
import {HealthStatComponent} from './health-stat/health-stat.component';

const COMPONENTS = [
  InfraFailAnalysisComponent,
  HealthStatComponent
];
const COMPONENTS_NOROUNT = [];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    HistRoutingModule
  ],
  declarations: [...COMPONENTS, ...COMPONENTS_NOROUNT],
  entryComponents: COMPONENTS_NOROUNT,
})
export class HistModule { }
