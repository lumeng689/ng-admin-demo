import { Component, NgZone, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { I18NService } from '@core';

@Component({
  selector: 'app-equipment-fail-forecast',
  templateUrl: './equipment-fail-forecast.component.html',
  styleUrls: ['./equipment-fail-forecast.component.less']
})
export class EquipmentFailForecastComponent implements OnInit {

  constructor(private msg: NzMessageService,
              private ngZone: NgZone,
              private i18n: I18NService) { }

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
}
