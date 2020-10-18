import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InfraHealthComponent } from './infra-health/infra-health.component';

const routes: Routes = [
  { path: '', component: InfraHealthComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OperatingRoutingModule { }
