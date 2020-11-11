import { Component, ElementRef, NgZone, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { I18NService } from '@core';
import { Chart } from '@antv/g2';

@Component({
  selector: 'app-infra-fail-analysis',
  templateUrl: './infra-fail-analysis.component.html',
  styleUrls: ['./infra-fail-analysis.component.less']
})
export class InfraFailAnalysisComponent implements OnInit {

  equipSelValue  = 1;

  get nzTitle(): string {
    if (this.equipSelValue === 1) {
      return '自动电扶梯故障类别分类统计';
    } else {
      return '屏蔽门故障类别分类统计';
    }
  }

  constructor(private msg: NzMessageService,
              private ngZone: NgZone,
              private i18n: I18NService) { }

  ngOnInit(): void {
  }

  onEquipChange(result: string): void {
    console.log('Selected equipment: ', result);
  }

  renderChart1(el: ElementRef<HTMLDivElement>): void {
    this.ngZone.runOutsideAngular(() => this.drawChart(el.nativeElement));
  }

  private drawChart(el: HTMLElement): void {
    const data = [
      { year: '0:00', value: 0.3 },
      { year: '4:00', value: 0.4 },
      { year: '8:00', value: 0.5 },
      { year: '12:00', value: 0.55 },
      { year: '16:00', value: 0.1 },
      { year: '20:00', value: 0.4 }
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

    chart.line().position('year*value').label('value');
    chart.point().position('year*value');

    chart.render();
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
