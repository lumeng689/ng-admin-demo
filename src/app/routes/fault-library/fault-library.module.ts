import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared';
import { FaultListComponent } from './fault-list/fault-list.component';

import { FaultLibraryRoutingModule } from './fault-library-routing.module';

@NgModule({
  declarations: [FaultListComponent],
  imports: [
    CommonModule,
    SharedModule,
    FaultLibraryRoutingModule
  ],
})
export class FaultLibraryModule {
}
