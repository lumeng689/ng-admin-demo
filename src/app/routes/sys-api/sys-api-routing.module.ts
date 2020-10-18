import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SysApiListComponent } from './sys-api-list/sys-api-list.component';

const routes: Routes = [
  { path: '', component: SysApiListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SysApiRoutingModule {
}
