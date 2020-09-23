import { Component, NgZone, OnInit } from '@angular/core';
import { I18NService } from '@core';
import { G2PieClickItem, G2PieData } from '@delon/chart/pie';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-infra-health',
  templateUrl: './infra-health.component.html',
  styleUrls: ['./infra-health.component.less'],
})
export class InfraHealthComponent implements OnInit {

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

  constructor(private msg: NzMessageService,
              private ngZone: NgZone,
              private i18n: I18NService) {
  }

  ngOnInit(): void {
  }

  onDateChange(result: Date): void {
    console.log('Selected Time: ', result);
  }

  onDateOk(result: Date | Date[] | null): void {
    console.log('onOk', result);
  }

  onEquipChange(result: string): void {
    console.log('Selected equipment: ', result);
  }

  format(val: number): string {
    return `&yen ${val.toFixed(2)}`;
  }


  handlePieClick(data: G2PieClickItem): void {
    this.msg.info(`${data.item.x} - ${data.item.y}`);
  }
}
