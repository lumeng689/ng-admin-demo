import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SysCfgListComponent } from './sys-cfg-list/sys-cfg-list.component';

const routes: Routes = [
  { path: '', component: SysCfgListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SysCfgRoutingModule {
}
