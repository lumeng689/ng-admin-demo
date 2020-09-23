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

}
