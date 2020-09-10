import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';

import { DataVRoutingModule } from './data-v-routing.module';
import { InfraMonitorComponent } from './infra-monitor/infra-monitor.component';
import { RelationComponent } from './relation/relation.component';

const COMPONENTS = [InfraMonitorComponent, RelationComponent];
const COMPONENTS_NOROUNT = [];

@NgModule({
  imports: [SharedModule, DataVRoutingModule],
  declarations: [...COMPONENTS, ...COMPONENTS_NOROUNT, InfraMonitorComponent],
  entryComponents: COMPONENTS_NOROUNT,
})
export class DataVModule {
}
