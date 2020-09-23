import { Component, NgZone, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { I18NService } from '@core';

@Component({
  selector: 'app-correlation-analysis',
  templateUrl: './correlation-analysis.component.html',
  styleUrls: ['./correlation-analysis.component.less']
})
export class CorrelationAnalysisComponent implements OnInit {

  constructor(private msg: NzMessageService,
              private ngZone: NgZone,
              private i18n: I18NService) { }

  ngOnInit(): void {
  }

}
