import { Component, NgZone, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { I18NService } from '@core';

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
}
