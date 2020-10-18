import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared';
import { FaultListComponent } from './fault-list/fault-list.component';
import { FaultLibraryRoutingModule } from './fault-library-routing.module';

const COMPONENTS = [FaultListComponent];

const COMPONENTS_NOROUNT = [];

@NgModule({
  declarations: [...COMPONENTS, ...COMPONENTS_NOROUNT],
  imports: [
    CommonModule,
    SharedModule,
    FaultLibraryRoutingModule
  ],
  entryComponents: [...COMPONENTS_NOROUNT]
})
export class FaultLibraryModule {
}
