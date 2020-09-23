import { Component, NgZone, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { I18NService } from '@core';

@Component({
  selector: 'app-bigdata-analysis',
  templateUrl: './bigdata-analysis.component.html',
  styleUrls: ['./bigdata-analysis.component.less']
})
export class BigdataAnalysisComponent implements OnInit {

  constructor(private msg: NzMessageService,
              private ngZone: NgZone,
              private i18n: I18NService) { }

  ngOnInit(): void {
  }

}
