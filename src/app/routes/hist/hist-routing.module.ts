import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {InfraFailAnalysisComponent} from './infra-fail-analysis/infra-fail-analysis.component';
import {HealthStatComponent} from './health-stat/health-stat.component';

const routes: Routes = [
  { path: 'infra', component: InfraFailAnalysisComponent },
  { path: 'equip', component: HealthStatComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HistRoutingModule { }
