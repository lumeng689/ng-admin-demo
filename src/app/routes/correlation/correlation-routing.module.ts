import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CorrelationAnalysisComponent } from './correlation-analysis/correlation-analysis.component';
import { EquipmentFailForecastComponent } from './equipment-fail-forecast/equipment-fail-forecast.component';

const routes: Routes = [
  { path: 'station', component: CorrelationAnalysisComponent },
  { path: 'equip', component: EquipmentFailForecastComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CorrelationRoutingModule {
}
