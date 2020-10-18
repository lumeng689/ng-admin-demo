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

  constructor(private msg: NzMessageService,
              private ngZone: NgZone,
              private i18n: I18NService) { }

  ngOnInit(): void {
  }

  onEquipChange(result: string): void {
    console.log('Selected equipment: ', result);
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
