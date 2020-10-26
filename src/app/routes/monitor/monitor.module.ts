import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared';
import { MonitorRoutingModule } from './monitor-routing.module';
import { RealTimeWarningComponent } from './real-time-warning/real-time-warning.component';
import { LayerBtnComponent } from './components/layer-btn/layer-btn.component';

const COMPONENTS = [
  RealTimeWarningComponent,
  LayerBtnComponent,
];

const COMPONENTS_NOROUNT = [];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MonitorRoutingModule,
  ],
  declarations: [...COMPONENTS, ...COMPONENTS_NOROUNT],
  entryComponents: COMPONENTS_NOROUNT,
})
export class MonitorModule {
}
