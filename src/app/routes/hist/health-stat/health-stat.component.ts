import { Component, ElementRef, NgZone, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Chart } from '@antv/g2';
import { I18NService } from '@core';

@Component({
  selector: 'app-health-stat',
  templateUrl: './health-stat.component.html',
  styleUrls: ['./health-stat.component.less'],
})
export class HealthStatComponent implements OnInit {

  constructor(private msg: NzMessageService,
              private ngZone: NgZone,
              private i18n: I18NService) {
  }

  ngOnInit(): void {
  }

  renderChart1(el: ElementRef<HTMLDivElement>): void {
    this.ngZone.runOutsideAngular(() => this.initChart1(el.nativeElement));
  }

  private initChart1(el: HTMLElement): void {

    const data = [
      { month: '1月', city: '屏蔽门', temperature: 7 },
      { month: '1月', city: '检票机', temperature: 5 },
      { month: '1月', city: '电梯', temperature: 9 },
      { month: '2月', city: '屏蔽门', temperature: 9 },
      { month: '2月', city: '检票机', temperature: 4 },
      { month: '2月', city: '电梯', temperature: 42 },
      { month: '3月', city: '屏蔽门', temperature: 13 },
      { month: '3月', city: '检票机', temperature: 22 },
      { month: '3月', city: '电梯', temperature: 8 },
      { month: '4月', city: '屏蔽门', temperature: 55 },
      { month: '4月', city: '检票机', temperature: 3 },
      { month: '4月', city: '电梯', temperature: 31 },
      { month: '5月', city: '屏蔽门', temperature: 62 },
      { month: '5月', city: '检票机', temperature: 71 },
      { month: '5月', city: '电梯', temperature: 22 },
      { month: '6月', city: '屏蔽门', temperature: 5 },
      { month: '6月', city: '检票机', temperature: 8 },
      { month: '6月', city: '电梯', temperature: 33 },
      { month: '7月', city: '屏蔽门', temperature: 25 },
      { month: '7月', city: '检票机', temperature: 17 },
      { month: '7月', city: '电梯', temperature: 12 },
      { month: '8月', city: '屏蔽门', temperature: 56 },
      { month: '8月', city: '检票机', temperature: 61 },
      { month: '8月', city: '电梯', temperature: 53 },
      { month: '9月', city: '屏蔽门', temperature: 32 },
      { month: '9月', city: '检票机', temperature: 1 },
      { month: '9月', city: '电梯', temperature: 11 },
      { month: '10月', city: '屏蔽门', temperature: 88 },
      { month: '10月', city: '检票机', temperature: 10 },
      { month: '10月', city: '电梯', temperature: 0 },
      { month: '11月', city: '屏蔽门', temperature: 19 },
      { month: '11月', city: '检票机', temperature: 66 },
      { month: '11月', city: '电梯', temperature: 11 },
      { month: '12月', city: '屏蔽门', temperature: 91 },
      { month: '12月', city: '检票机', temperature: 100 },
      { month: '12月', city: '电梯', temperature: 30 },
    ];

    const chart = new Chart({
      container: el,
      autoFit: true,
      height: 500,
    });

    chart.data(data);
    chart.scale({
      month: {
        range: [0, 1],
      },
      temperature: {
        nice: true,
      },
    });

    chart.tooltip({
      showCrosshairs: true,
      shared: true,
    });

    chart.axis('temperature', {
      label: {
        formatter: (val) => {
          return val;
        },
      },
    });

    chart
      .line()
      .position('month*temperature')
      .color('city')
      .shape('smooth');

    chart
      .point()
      .position('month*temperature')
      .color('city')
      .shape('circle');

    chart.render();
  }


  renderChart2(el: ElementRef<HTMLDivElement>): void {
    this.ngZone.runOutsideAngular(() => this.initChart2(el.nativeElement));
  }

  private initChart2(el: HTMLElement): void {

    const data = [
      { month: '23:00', city: '站台', temperature: 7 },
      { month: '23:00', city: '站厅', temperature: 3 },
      { month: '23:00', city: '通道', temperature: 5 },
      { month: '23:00', city: '楼扶梯', temperature: 2 },
      { month: '23:00', city: '设备用房', temperature: 1 },
      { month: '1:00', city: '站台', temperature: 1 },
      { month: '1:00', city: '站厅', temperature: 3 },
      { month: '1:00', city: '通道', temperature: 4 },
      { month: '1:00', city: '楼扶梯', temperature: 6 },
      { month: '1:00', city: '设备用房', temperature: 7 },
      { month: '3:00', city: '站台', temperature: 4 },
      { month: '3:00', city: '站厅', temperature: 2 },
      { month: '3:00', city: '通道', temperature: 3 },
      { month: '3:00', city: '楼扶梯', temperature: 8 },
      { month: '3:00', city: '设备用房', temperature: 1 },
      { month: '5:00', city: '站台', temperature: 9 },
      { month: '5:00', city: '站厅', temperature: 7 },
      { month: '5:00', city: '通道', temperature: 5 },
      { month: '5:00', city: '楼扶梯', temperature: 9 },
      { month: '5:00', city: '设备用房', temperature: 2 },
      { month: '7:00', city: '站台', temperature: 5 },
      { month: '7:00', city: '站厅', temperature: 7 },
      { month: '7:00', city: '通道', temperature: 1 },
      { month: '7:00', city: '楼扶梯', temperature: 4 },
      { month: '7:00', city: '设备用房', temperature: 3 }
    ];

    const chart = new Chart({
      container: el,
      autoFit: true,
      height: 500,
    });

    chart.data(data);
    chart.scale({
      month: {
        range: [0, 1],
      },
      temperature: {
        nice: true,
      },
    });

    chart.tooltip({
      showCrosshairs: true,
      shared: true,
    });

    chart.axis('temperature', {
      label: {
        formatter: (val) => {
          return val + ' °C';
        },
      },
    });

    chart
      .line()
      .position('month*temperature')
      .color('city')
      .shape('smooth');

    chart
      .point()
      .position('month*temperature')
      .color('city')
      .shape('circle');

    chart.render();
  }

  renderChart3(el: ElementRef<HTMLDivElement>): void {
    this.ngZone.runOutsideAngular(() => this.initChart3(el.nativeElement));
  }

  private initChart3(el: HTMLElement): void {
    const data = [
      { year: '0:00', value: 4 },
      { year: '4:00', value: 2 },
      { year: '8:00', value: 3 },
      { year: '12:00', value: 4 },
      { year: '16:00', value: 1 },
      { year: '20:00', value: 0 },
      { year: '24:00', value: 2 }
    ];
    const chart = new Chart({
      container: el,
      autoFit: true,
      height: 500,
    });

    chart.data(data);
    chart.scale({
      year: {
        range: [0, 1],
      },
      value: {
        min: 0,
        nice: true,
      },
    });

    chart.tooltip({
      showCrosshairs: true, // 展示 Tooltip 辅助线
      shared: true,
    });

    chart.legend({
      title: '故障发生数'
    });

    chart.line().position('year*value').label('value');
    chart.point().position('year*value');

    chart.render();
  }

}
