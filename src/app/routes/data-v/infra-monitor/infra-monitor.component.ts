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

  salesPieData: G2PieData[] = [
    {
      x: '一级',
      y: 20,
    },
    {
      x: '二级',
      y: 70,
    },
    {
      x: '三级',
      y: 60,
    },
    {
      x: '四级',
      y: 50,
    },
  ];
  total: string;


  tags: G2TagCloudData[] = [
    { value: 29, name: '滚轮轴承故障' },
    { value: 8, name: '驱动不足' },
    { value: 18, name: '屏蔽门' },
    { value: 13, name: '自动扶梯' },
    { value: 8, name: '老化' },
    { value: 9, name: '无法关闭' },
    { value: 8, name: '暂停' },
    { value: 8, name: '扶手带老化' },
  ];

  chartData: G2TimelineData[] = [];
  titleMap: G2TimelineMap = { y1: '自动售票机', y2: '站台屏蔽门', y3: '自动电扶梯', y4: '指标4', y5: '指标5' };

  constructor(private msg: NzMessageService,
              private ngZone: NgZone) {
  }

  ngOnInit(): void {
    this.initTimeLineData();
  }

  format(val: number): string {
    return `&yen ${val.toFixed(2)}`;
  }

  handlePieClick(data: G2PieClickItem): void {
    this.msg.info(`${data.item.x} - ${data.item.y}`);
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

  handleTagClick(data: G2TagCloudClickItem): void {
    this.msg.info(`${data.item.name} - ${data.item.value}`);
  }

  renderPie(el: ElementRef<HTMLDivElement>): void {
    this.ngZone.runOutsideAngular(() => this.initPie(el.nativeElement));
  }

  private initPie(el: HTMLElement): void {
    const data = [
      { type: '分类一', value: 27 },
      { type: '分类二', value: 25 },
      { type: '分类三', value: 18 },
      { type: '分类四', value: 15 },
      { type: '分类五', value: 10 },
      { type: 'Other', value: 5 },
    ];

    let max = 0;
    data.forEach((obj) => {
      if (obj.value > max) {
        max = obj.value;
      }
    });


    const chart = new Chart({
      container: el,
      autoFit: true,
      height: 500,
    });

    chart.coordinate('theta', {
      radius: 0.8,
    });

    chart.data(data);

    chart.tooltip({
      showTitle: false,
      showMarkers: false,
    });

    chart
      .interval()
      .adjust('stack')
      .position('value')
      .color('type')
      .shape('slice-shape')
      .label('type', {
        offset: -130,
        layout: {
          type: 'limit-in-shape',
        },
      });

    chart.interaction('element-active');

    chart.render();
  }
}
