import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';

import { DataVRoutingModule } from './data-v-routing.module';
import { InfraMonitorComponent } from './infra-monitor/infra-monitor.component';
import { RelationComponent } from './relation/relation.component';
import { BigdataAnalysisComponent } from './components/bigdata-analysis/bigdata-analysis.component';
import { InfraHealthComponent } from './components/infra-health/infra-health.component';
import { CorrelationAnalysisComponent } from './components/correlation-analysis/correlation-analysis.component';
import { InfraFailAnalysisComponent } from './components/infra-fail-analysis/infra-fail-analysis.component';
import { NzOverlayModule } from 'ng-zorro-antd/core/overlay';
import { EquipmentFailForecastComponent } from './components/equipment-fail-forecast/equipment-fail-forecast.component';
import { RealtimeNoticeComponent } from './components/realtime-notice/realtime-notice.component';
import { HealthStatComponent } from './components/health-stat/health-stat.component';
import { FaultAnalysisPredictionComponent } from './components/fault-analysis-prediction/fault-analysis-prediction.component';

const COMPONENTS = [
  InfraMonitorComponent,
  RelationComponent,
  InfraMonitorComponent,
  BigdataAnalysisComponent,
  InfraHealthComponent,
  CorrelationAnalysisComponent,
  InfraFailAnalysisComponent,
  EquipmentFailForecastComponent,
  RealtimeNoticeComponent,
  HealthStatComponent,
  FaultAnalysisPredictionComponent
];
const COMPONENTS_NOROUNT = [];

@NgModule({
  imports: [SharedModule, DataVRoutingModule, NzOverlayModule],
  declarations: [...COMPONENTS, ...COMPONENTS_NOROUNT],
  entryComponents: COMPONENTS_NOROUNT,
})
export class DataVModule {
}
