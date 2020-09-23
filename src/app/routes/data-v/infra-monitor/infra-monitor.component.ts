import { Component, ElementRef, NgZone, OnInit  } from '@angular/core';
import { G2PieClickItem, G2PieData } from '@delon/chart/pie';
import { G2TagCloudClickItem, G2TagCloudData } from '@delon/chart/tag-cloud';
import { G2TimelineData, G2TimelineMap } from '@delon/chart/timeline';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Chart } from '@antv/g2';

@Component({
  selector: 'app-infra-monitor',
  templateUrl: './infra-monitor.component.html',
  styleUrls: ['./infra-monitor.component.less'],
})
export class InfraMonitorComponent implements OnInit {

  constructor(private msg: NzMessageService,
              private ngZone: NgZone) {
  }

  ngOnInit(): void {

  }
}
