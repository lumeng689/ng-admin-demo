import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RealTimeWarningComponent } from './real-time-warning/real-time-warning.component';

const routes: Routes = [
  { path: '', component: RealTimeWarningComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MonitorRoutingModule { }
