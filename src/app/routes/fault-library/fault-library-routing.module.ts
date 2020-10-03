import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FaultListComponent } from './fault-list/fault-list.component';

const routes: Routes = [
  { path: '', component: FaultListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FaultLibraryRoutingModule {
}
