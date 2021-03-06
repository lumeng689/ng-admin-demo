import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared';
import { CorrelationRoutingModule } from './correlation-routing.module';

import { CorrelationAnalysisComponent } from './correlation-analysis/correlation-analysis.component';
import { EquipmentFailForecastComponent } from './equipment-fail-forecast/equipment-fail-forecast.component';
import { LayerBtnComponent } from './components/layer-btn/layer-btn.component';


const COMPONENTS = [
  CorrelationAnalysisComponent,
  EquipmentFailForecastComponent,
  LayerBtnComponent,
];
const COMPONENTS_NOROUNT = [];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    CorrelationRoutingModule,
  ],
  declarations: [...COMPONENTS, ...COMPONENTS_NOROUNT],
  entryComponents: COMPONENTS_NOROUNT,
})
export class CorrelationModule {
}
