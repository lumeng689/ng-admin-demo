import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import * as screenfull from 'screenfull';

@Component({
  selector: 'app-real-time-warning',
  templateUrl: './real-time-warning.component.html',
  styleUrls: ['./real-time-warning.component.less']
})
export class RealTimeWarningComponent implements OnInit {

  @ViewChild('realTimeWarningDiv', {static: false})
  realTimeWarningDiv: ElementRef;

  mapSrc = 'assets/tmp/img/tttt1.jpg';

  private get sf(): screenfull.Screenfull {
    return screenfull as screenfull.Screenfull;
  }

  constructor() { }

  ngOnInit(): void {
  }

  toggleFullScreen():void {
    if (this.sf.isEnabled) {
      this.sf.toggle(this.realTimeWarningDiv.nativeElement);
    }
  }

  onDropDownChange(val: any): void {
    console.log(val);
    this.mapSrc = `assets/tmp/img/tttt${val}.jpg`;
  }
}
