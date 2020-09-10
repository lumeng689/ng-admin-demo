import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfraMonitorComponent } from './infra-monitor/infra-monitor.component';
import { RelationComponent } from './relation/relation.component';

const routes: Routes = [
  { path: 'relation', component: RelationComponent },
  { path: 'infra', component: InfraMonitorComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DataVRoutingModule {
}
