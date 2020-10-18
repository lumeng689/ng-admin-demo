import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SysDataListComponent } from './sys-data-list/sys-data-list.component';

const routes: Routes = [
  { path: '', component: SysDataListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SysDataRoutingModule {
}
