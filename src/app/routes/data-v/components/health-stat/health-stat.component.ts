import { Component, NgZone, OnInit } from '@angular/core';
import { G2TimelineData, G2TimelineMap } from '@delon/chart';
import { NzMessageService } from 'ng-zorro-antd/message';
import { I18NService } from '@core';

@Component({
  selector: 'app-health-stat',
  templateUrl: './health-stat.component.html',
  styleUrls: ['./health-stat.component.less']
})
export class HealthStatComponent implements OnInit {

  chartData: G2TimelineData[] = [];
  titleMap: G2TimelineMap = { y1: '自动售票机', y2: '站台屏蔽门', y3: '自动电扶梯', y4: '指标4', y5: '指标5' };

  constructor(private msg: NzMessageService,
              private ngZone: NgZone,
              private i18n: I18NService) { }

  ngOnInit(): void {
    this.initTimeLineData();
  }


  initTimeLineData(): void {
    for (let i = 0; i < 20; i += 1) {
      this.chartData.push({
        time: new Date().getTime() + 1000 * 60 * 30 * i,
        y1: Math.floor(Math.random() * 100) + 500,
        y2: Math.floor(Math.random() * 100) + 1000,
        y3: Math.floor(Math.random() * 100) + 1500,
        y4: Math.floor(Math.random() * 100) + 2000,
        y5: Math.floor(Math.random() * 100) + 2500,
      });
    }
  }
}
