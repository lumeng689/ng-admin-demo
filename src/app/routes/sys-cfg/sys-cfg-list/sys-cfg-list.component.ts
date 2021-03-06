import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { STChange, STColumn, STComponent, STData } from '@delon/abc/st';
import { ModalHelper, _HttpClient } from '@delon/theme';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';
import { CfgDetailComponent } from '../cfg-detail/cfg-detail.component';
import { CfgFormComponent } from '../cfg-form/cfg-form.component';
import { filter, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-sys-cfg-list',
  templateUrl: './sys-cfg-list.component.html',
  styleUrls: ['./sys-cfg-list.component.less'],
})
export class SysCfgListComponent implements OnInit {
  q = {
    pi: 1,
    ps: 10,
    no: '',
    sorter: '',
    date: '',
    status: null,
    statusList: [],
  };
  data: any[] = [];
  loading = false;
  status = [
    { index: 0, text: '关闭', value: false, type: 'default', checked: false },
    {
      index: 1,
      text: '运行中',
      value: false,
      type: 'processing',
      checked: false,
    },
    { index: 2, text: '已上线', value: false, type: 'success', checked: false },
    { index: 3, text: '异常', value: false, type: 'error', checked: false },
  ];
  @ViewChild('st', { static: true })
  st: STComponent;
  columns: STColumn[] = [
    { title: '', index: 'key', type: 'checkbox' },
    { title: '设备名称', index: 'title' },
    { title: '编号', index: 'no' },
    { title: '所属区域', index: 'description' },
    { title: '备注', index: 'desc' },
    {
      title: '操作',
      buttons: [
        {
          text: '配置',
          click: (item) => this.showDetail(item.no),
        },
      ],
    },
  ];
  selectedRows: STData[] = [];
  description = '';
  totalCallNo = 0;

  constructor(private http: _HttpClient,
              public msg: NzMessageService,
              private modalSrv: NzModalService,
              private modalHelper: ModalHelper,
              private cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.loading = true;
    this.q.statusList = this.status.filter((w) => w.checked).map((item) => item.index);
    if (this.q.status !== null && this.q.status > -1) {
      this.q.statusList.push(this.q.status);
    }


    let res = [{
      'key': 0,
      'disabled': true,
      'href': 'https://ant.design',
      'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png',
      'no': '设备编号0',
      'title': '站厅设备0',
      'owner': '曲丽丽',
      'description': '站厅',
      'callNo': 903,
      'status': 1,
      'updatedAt': '2017-07-01T00:00:00.000Z',
      'createdAt': '2017-07-01T00:00:00.000Z',
      'progress': 77,
      'statusText': '运行中',
      'statusType': 'processing',
    }, {
      'key': 1,
      'disabled': false,
      'href': 'https://ant.design',
      'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png',
      'no': '设备编号1',
      'title': '站厅设备1',
      'owner': '曲丽丽',
      'description': '站厅',
      'callNo': 823,
      'status': 1,
      'updatedAt': '2017-07-01T00:00:00.000Z',
      'createdAt': '2017-07-01T00:00:00.000Z',
      'progress': 41,
      'statusText': '运行中',
      'statusType': 'processing',
    }, {
      'key': 2,
      'disabled': false,
      'href': 'https://ant.design',
      'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png',
      'no': '设备编号2',
      'title': '站厅设备2',
      'owner': '曲丽丽',
      'description': '站厅',
      'callNo': 484,
      'status': 0,
      'updatedAt': '2017-07-02T00:00:00.000Z',
      'createdAt': '2017-07-02T00:00:00.000Z',
      'progress': 78,
      'statusText': '关闭',
      'statusType': 'default',
    }, {
      'key': 3,
      'disabled': false,
      'href': 'https://ant.design',
      'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png',
      'no': '设备编号3',
      'title': '站厅设备3',
      'owner': '曲丽丽',
      'description': '站厅',
      'callNo': 249,
      'status': 2,
      'updatedAt': '2017-07-02T00:00:00.000Z',
      'createdAt': '2017-07-02T00:00:00.000Z',
      'progress': 67,
      'statusText': '已上线',
      'statusType': 'success',
    }, {
      'key': 4,
      'disabled': false,
      'href': 'https://ant.design',
      'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png',
      'no': '设备编号4',
      'title': '站厅设备4',
      'owner': '曲丽丽',
      'description': '站厅',
      'callNo': 831,
      'status': 1,
      'updatedAt': '2017-07-03T00:00:00.000Z',
      'createdAt': '2017-07-03T00:00:00.000Z',
      'progress': 95,
      'statusText': '运行中',
      'statusType': 'processing',
    }, {
      'key': 5,
      'disabled': false,
      'href': 'https://ant.design',
      'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png',
      'no': '设备编号5',
      'title': '站厅设备5',
      'owner': '曲丽丽',
      'description': '站厅',
      'callNo': 214,
      'status': 2,
      'updatedAt': '2017-07-03T00:00:00.000Z',
      'createdAt': '2017-07-03T00:00:00.000Z',
      'progress': 12,
      'statusText': '已上线',
      'statusType': 'success',
    }, {
      'key': 6,
      'disabled': true,
      'href': 'https://ant.design',
      'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png',
      'no': '设备编号6',
      'title': '站厅设备6',
      'owner': '曲丽丽',
      'description': '站厅',
      'callNo': 348,
      'status': 2,
      'updatedAt': '2017-07-04T00:00:00.000Z',
      'createdAt': '2017-07-04T00:00:00.000Z',
      'progress': 23,
      'statusText': '已上线',
      'statusType': 'success',
    }, {
      'key': 7,
      'disabled': false,
      'href': 'https://ant.design',
      'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png',
      'no': '设备编号7',
      'title': '站厅设备7',
      'owner': '曲丽丽',
      'description': '站厅',
      'callNo': 45,
      'status': 0,
      'updatedAt': '2017-07-04T00:00:00.000Z',
      'createdAt': '2017-07-04T00:00:00.000Z',
      'progress': 68,
      'statusText': '关闭',
      'statusType': 'default',
    }, {
      'key': 8,
      'disabled': false,
      'href': 'https://ant.design',
      'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png',
      'no': '设备编号8',
      'title': '站厅设备8',
      'owner': '曲丽丽',
      'description': '站厅',
      'callNo': 274,
      'status': 0,
      'updatedAt': '2017-07-05T00:00:00.000Z',
      'createdAt': '2017-07-05T00:00:00.000Z',
      'progress': 52,
      'statusText': '关闭',
      'statusType': 'default',
    }, {
      'key': 9,
      'disabled': false,
      'href': 'https://ant.design',
      'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png',
      'no': '设备编号9',
      'title': '站厅设备9',
      'owner': '曲丽丽',
      'description': '站厅',
      'callNo': 825,
      'status': 3,
      'updatedAt': '2017-07-05T00:00:00.000Z',
      'createdAt': '2017-07-05T00:00:00.000Z',
      'progress': 66,
      'statusText': '异常',
      'statusType': 'error',
    }, {
      'key': 10,
      'disabled': false,
      'href': 'https://ant.design',
      'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png',
      'no': '设备编号10',
      'title': '站厅设备10',
      'owner': '曲丽丽',
      'description': '站厅',
      'callNo': 337,
      'status': 2,
      'updatedAt': '2017-07-06T00:00:00.000Z',
      'createdAt': '2017-07-06T00:00:00.000Z',
      'progress': 85,
      'statusText': '已上线',
      'statusType': 'success',
    }, {
      'key': 11,
      'disabled': false,
      'href': 'https://ant.design',
      'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png',
      'no': '设备编号11',
      'title': '站厅设备11',
      'owner': '曲丽丽',
      'description': '站厅',
      'callNo': 659,
      'status': 1,
      'updatedAt': '2017-07-06T00:00:00.000Z',
      'createdAt': '2017-07-06T00:00:00.000Z',
      'progress': 84,
      'statusText': '运行中',
      'statusType': 'processing',
    }, {
      'key': 12,
      'disabled': true,
      'href': 'https://ant.design',
      'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png',
      'no': '设备编号12',
      'title': '站厅设备12',
      'owner': '曲丽丽',
      'description': '站厅',
      'callNo': 305,
      'status': 2,
      'updatedAt': '2017-07-07T00:00:00.000Z',
      'createdAt': '2017-07-07T00:00:00.000Z',
      'progress': 58,
      'statusText': '已上线',
      'statusType': 'success',
    }, {
      'key': 13,
      'disabled': false,
      'href': 'https://ant.design',
      'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png',
      'no': '设备编号13',
      'title': '站厅设备13',
      'owner': '曲丽丽',
      'description': '站厅',
      'callNo': 395,
      'status': 1,
      'updatedAt': '2017-07-07T00:00:00.000Z',
      'createdAt': '2017-07-07T00:00:00.000Z',
      'progress': 17,
      'statusText': '运行中',
      'statusType': 'processing',
    }, {
      'key': 14,
      'disabled': false,
      'href': 'https://ant.design',
      'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png',
      'no': '设备编号14',
      'title': '站厅设备14',
      'owner': '曲丽丽',
      'description': '站厅',
      'callNo': 33,
      'status': 1,
      'updatedAt': '2017-07-08T00:00:00.000Z',
      'createdAt': '2017-07-08T00:00:00.000Z',
      'progress': 100,
      'statusText': '运行中',
      'statusType': 'processing',
    }, {
      'key': 15,
      'disabled': false,
      'href': 'https://ant.design',
      'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png',
      'no': '设备编号15',
      'title': '站厅设备15',
      'owner': '曲丽丽',
      'description': '站厅',
      'callNo': 852,
      'status': 0,
      'updatedAt': '2017-07-08T00:00:00.000Z',
      'createdAt': '2017-07-08T00:00:00.000Z',
      'progress': 10,
      'statusText': '关闭',
      'statusType': 'default',
    }, {
      'key': 16,
      'disabled': false,
      'href': 'https://ant.design',
      'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png',
      'no': '设备编号16',
      'title': '站厅设备16',
      'owner': '曲丽丽',
      'description': '站厅',
      'callNo': 469,
      'status': 1,
      'updatedAt': '2017-07-09T00:00:00.000Z',
      'createdAt': '2017-07-09T00:00:00.000Z',
      'progress': 84,
      'statusText': '运行中',
      'statusType': 'processing',
    }, {
      'key': 17,
      'disabled': false,
      'href': 'https://ant.design',
      'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png',
      'no': '设备编号17',
      'title': '站厅设备17',
      'owner': '曲丽丽',
      'description': '站厅',
      'callNo': 856,
      'status': 2,
      'updatedAt': '2017-07-09T00:00:00.000Z',
      'createdAt': '2017-07-09T00:00:00.000Z',
      'progress': 92,
      'statusText': '已上线',
      'statusType': 'success',
    }, {
      'key': 18,
      'disabled': true,
      'href': 'https://ant.design',
      'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png',
      'no': '设备编号18',
      'title': '站厅设备18',
      'owner': '曲丽丽',
      'description': '站厅',
      'callNo': 124,
      'status': 0,
      'updatedAt': '2017-07-10T00:00:00.000Z',
      'createdAt': '2017-07-10T00:00:00.000Z',
      'progress': 67,
      'statusText': '关闭',
      'statusType': 'default',
    }, {
      'key': 19,
      'disabled': false,
      'href': 'https://ant.design',
      'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png',
      'no': '设备编号19',
      'title': '站厅设备19',
      'owner': '曲丽丽',
      'description': '站厅',
      'callNo': 461,
      'status': 1,
      'updatedAt': '2017-07-10T00:00:00.000Z',
      'createdAt': '2017-07-10T00:00:00.000Z',
      'progress': 50,
      'statusText': '运行中',
      'statusType': 'processing',
    }, {
      'key': 20,
      'disabled': false,
      'href': 'https://ant.design',
      'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png',
      'no': '设备编号20',
      'title': '站厅设备20',
      'owner': '曲丽丽',
      'description': '站厅',
      'callNo': 749,
      'status': 2,
      'updatedAt': '2017-07-11T00:00:00.000Z',
      'createdAt': '2017-07-11T00:00:00.000Z',
      'progress': 30,
      'statusText': '已上线',
      'statusType': 'success',
    }, {
      'key': 21,
      'disabled': false,
      'href': 'https://ant.design',
      'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png',
      'no': '设备编号21',
      'title': '站厅设备21',
      'owner': '曲丽丽',
      'description': '站厅',
      'callNo': 743,
      'status': 3,
      'updatedAt': '2017-07-11T00:00:00.000Z',
      'createdAt': '2017-07-11T00:00:00.000Z',
      'progress': 90,
      'statusText': '异常',
      'statusType': 'error',
    }, {
      'key': 22,
      'disabled': false,
      'href': 'https://ant.design',
      'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png',
      'no': '设备编号22',
      'title': '站厅设备22',
      'owner': '曲丽丽',
      'description': '站厅',
      'callNo': 166,
      'status': 1,
      'updatedAt': '2017-07-12T00:00:00.000Z',
      'createdAt': '2017-07-12T00:00:00.000Z',
      'progress': 96,
      'statusText': '运行中',
      'statusType': 'processing',
    }, {
      'key': 23,
      'disabled': false,
      'href': 'https://ant.design',
      'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png',
      'no': '设备编号23',
      'title': '站厅设备23',
      'owner': '曲丽丽',
      'description': '站厅',
      'callNo': 1,
      'status': 1,
      'updatedAt': '2017-07-12T00:00:00.000Z',
      'createdAt': '2017-07-12T00:00:00.000Z',
      'progress': 62,
      'statusText': '运行中',
      'statusType': 'processing',
    }, {
      'key': 24,
      'disabled': true,
      'href': 'https://ant.design',
      'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png',
      'no': '设备编号24',
      'title': '站厅设备24',
      'owner': '曲丽丽',
      'description': '站厅',
      'callNo': 57,
      'status': 2,
      'updatedAt': '2017-07-13T00:00:00.000Z',
      'createdAt': '2017-07-13T00:00:00.000Z',
      'progress': 8,
      'statusText': '已上线',
      'statusType': 'success',
    }, {
      'key': 25,
      'disabled': false,
      'href': 'https://ant.design',
      'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png',
      'no': '设备编号25',
      'title': '站厅设备25',
      'owner': '曲丽丽',
      'description': '站厅',
      'callNo': 759,
      'status': 2,
      'updatedAt': '2017-07-13T00:00:00.000Z',
      'createdAt': '2017-07-13T00:00:00.000Z',
      'progress': 31,
      'statusText': '已上线',
      'statusType': 'success',
    }, {
      'key': 26,
      'disabled': false,
      'href': 'https://ant.design',
      'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png',
      'no': '设备编号26',
      'title': '站厅设备26',
      'owner': '曲丽丽',
      'description': '站厅',
      'callNo': 109,
      'status': 3,
      'updatedAt': '2017-07-14T00:00:00.000Z',
      'createdAt': '2017-07-14T00:00:00.000Z',
      'progress': 77,
      'statusText': '异常',
      'statusType': 'error',
    }, {
      'key': 27,
      'disabled': false,
      'href': 'https://ant.design',
      'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png',
      'no': '设备编号27',
      'title': '站厅设备27',
      'owner': '曲丽丽',
      'description': '站厅',
      'callNo': 570,
      'status': 3,
      'updatedAt': '2017-07-14T00:00:00.000Z',
      'createdAt': '2017-07-14T00:00:00.000Z',
      'progress': 90,
      'statusText': '异常',
      'statusType': 'error',
    }, {
      'key': 28,
      'disabled': false,
      'href': 'https://ant.design',
      'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png',
      'no': '设备编号28',
      'title': '站厅设备28',
      'owner': '曲丽丽',
      'description': '站厅',
      'callNo': 332,
      'status': 2,
      'updatedAt': '2017-07-15T00:00:00.000Z',
      'createdAt': '2017-07-15T00:00:00.000Z',
      'progress': 46,
      'statusText': '已上线',
      'statusType': 'success',
    }, {
      'key': 29,
      'disabled': false,
      'href': 'https://ant.design',
      'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png',
      'no': '设备编号29',
      'title': '站厅设备29',
      'owner': '曲丽丽',
      'description': '站厅',
      'callNo': 153,
      'status': 2,
      'updatedAt': '2017-07-15T00:00:00.000Z',
      'createdAt': '2017-07-15T00:00:00.000Z',
      'progress': 44,
      'statusText': '已上线',
      'statusType': 'success',
    }, {
      'key': 30,
      'disabled': true,
      'href': 'https://ant.design',
      'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png',
      'no': '设备编号30',
      'title': '站厅设备30',
      'owner': '曲丽丽',
      'description': '站厅',
      'callNo': 763,
      'status': 3,
      'updatedAt': '2017-07-16T00:00:00.000Z',
      'createdAt': '2017-07-16T00:00:00.000Z',
      'progress': 55,
      'statusText': '异常',
      'statusType': 'error',
    }, {
      'key': 31,
      'disabled': false,
      'href': 'https://ant.design',
      'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png',
      'no': '设备编号31',
      'title': '站厅设备31',
      'owner': '曲丽丽',
      'description': '站厅',
      'callNo': 338,
      'status': 2,
      'updatedAt': '2017-07-16T00:00:00.000Z',
      'createdAt': '2017-07-16T00:00:00.000Z',
      'progress': 42,
      'statusText': '已上线',
      'statusType': 'success',
    }, {
      'key': 32,
      'disabled': false,
      'href': 'https://ant.design',
      'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png',
      'no': '设备编号32',
      'title': '站厅设备32',
      'owner': '曲丽丽',
      'description': '站厅',
      'callNo': 370,
      'status': 1,
      'updatedAt': '2017-07-17T00:00:00.000Z',
      'createdAt': '2017-07-17T00:00:00.000Z',
      'progress': 49,
      'statusText': '运行中',
      'statusType': 'processing',
    }, {
      'key': 33,
      'disabled': false,
      'href': 'https://ant.design',
      'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png',
      'no': '设备编号33',
      'title': '站厅设备33',
      'owner': '曲丽丽',
      'description': '站厅',
      'callNo': 345,
      'status': 0,
      'updatedAt': '2017-07-17T00:00:00.000Z',
      'createdAt': '2017-07-17T00:00:00.000Z',
      'progress': 10,
      'statusText': '关闭',
      'statusType': 'default',
    }, {
      'key': 34,
      'disabled': false,
      'href': 'https://ant.design',
      'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png',
      'no': '设备编号34',
      'title': '站厅设备34',
      'owner': '曲丽丽',
      'description': '站厅',
      'callNo': 301,
      'status': 1,
      'updatedAt': '2017-07-18T00:00:00.000Z',
      'createdAt': '2017-07-18T00:00:00.000Z',
      'progress': 84,
      'statusText': '运行中',
      'statusType': 'processing',
    }, {
      'key': 35,
      'disabled': false,
      'href': 'https://ant.design',
      'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png',
      'no': '设备编号35',
      'title': '站厅设备35',
      'owner': '曲丽丽',
      'description': '站厅',
      'callNo': 388,
      'status': 1,
      'updatedAt': '2017-07-18T00:00:00.000Z',
      'createdAt': '2017-07-18T00:00:00.000Z',
      'progress': 48,
      'statusText': '运行中',
      'statusType': 'processing',
    }, {
      'key': 36,
      'disabled': true,
      'href': 'https://ant.design',
      'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png',
      'no': '设备编号36',
      'title': '站厅设备36',
      'owner': '曲丽丽',
      'description': '站厅',
      'callNo': 407,
      'status': 0,
      'updatedAt': '2017-07-19T00:00:00.000Z',
      'createdAt': '2017-07-19T00:00:00.000Z',
      'progress': 23,
      'statusText': '关闭',
      'statusType': 'default',
    }, {
      'key': 37,
      'disabled': false,
      'href': 'https://ant.design',
      'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png',
      'no': '设备编号37',
      'title': '站厅设备37',
      'owner': '曲丽丽',
      'description': '站厅',
      'callNo': 42,
      'status': 1,
      'updatedAt': '2017-07-19T00:00:00.000Z',
      'createdAt': '2017-07-19T00:00:00.000Z',
      'progress': 5,
      'statusText': '运行中',
      'statusType': 'processing',
    }, {
      'key': 38,
      'disabled': false,
      'href': 'https://ant.design',
      'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png',
      'no': '设备编号38',
      'title': '站厅设备38',
      'owner': '曲丽丽',
      'description': '站厅',
      'callNo': 584,
      'status': 1,
      'updatedAt': '2017-07-20T00:00:00.000Z',
      'createdAt': '2017-07-20T00:00:00.000Z',
      'progress': 34,
      'statusText': '运行中',
      'statusType': 'processing',
    }, {
      'key': 39,
      'disabled': false,
      'href': 'https://ant.design',
      'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png',
      'no': '设备编号39',
      'title': '站厅设备39',
      'owner': '曲丽丽',
      'description': '站厅',
      'callNo': 169,
      'status': 0,
      'updatedAt': '2017-07-20T00:00:00.000Z',
      'createdAt': '2017-07-20T00:00:00.000Z',
      'progress': 91,
      'statusText': '关闭',
      'statusType': 'default',
    }, {
      'key': 40,
      'disabled': false,
      'href': 'https://ant.design',
      'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png',
      'no': '设备编号40',
      'title': '站厅设备40',
      'owner': '曲丽丽',
      'description': '站厅',
      'callNo': 564,
      'status': 0,
      'updatedAt': '2017-07-21T00:00:00.000Z',
      'createdAt': '2017-07-21T00:00:00.000Z',
      'progress': 85,
      'statusText': '关闭',
      'statusType': 'default',
    }, {
      'key': 41,
      'disabled': false,
      'href': 'https://ant.design',
      'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png',
      'no': '设备编号41',
      'title': '站厅设备41',
      'owner': '曲丽丽',
      'description': '站厅',
      'callNo': 409,
      'status': 0,
      'updatedAt': '2017-07-21T00:00:00.000Z',
      'createdAt': '2017-07-21T00:00:00.000Z',
      'progress': 8,
      'statusText': '关闭',
      'statusType': 'default',
    }, {
      'key': 42,
      'disabled': true,
      'href': 'https://ant.design',
      'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png',
      'no': '设备编号42',
      'title': '站厅设备42',
      'owner': '曲丽丽',
      'description': '站厅',
      'callNo': 125,
      'status': 1,
      'updatedAt': '2017-07-22T00:00:00.000Z',
      'createdAt': '2017-07-22T00:00:00.000Z',
      'progress': 12,
      'statusText': '运行中',
      'statusType': 'processing',
    }, {
      'key': 43,
      'disabled': false,
      'href': 'https://ant.design',
      'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png',
      'no': '设备编号43',
      'title': '站厅设备43',
      'owner': '曲丽丽',
      'description': '站厅',
      'callNo': 525,
      'status': 1,
      'updatedAt': '2017-07-22T00:00:00.000Z',
      'createdAt': '2017-07-22T00:00:00.000Z',
      'progress': 84,
      'statusText': '运行中',
      'statusType': 'processing',
    }, {
      'key': 44,
      'disabled': false,
      'href': 'https://ant.design',
      'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png',
      'no': '设备编号44',
      'title': '站厅设备44',
      'owner': '曲丽丽',
      'description': '站厅',
      'callNo': 693,
      'status': 1,
      'updatedAt': '2017-07-23T00:00:00.000Z',
      'createdAt': '2017-07-23T00:00:00.000Z',
      'progress': 55,
      'statusText': '运行中',
      'statusType': 'processing',
    }, {
      'key': 45,
      'disabled': false,
      'href': 'https://ant.design',
      'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png',
      'no': '设备编号45',
      'title': '站厅设备45',
      'owner': '曲丽丽',
      'description': '站厅',
      'callNo': 284,
      'status': 1,
      'updatedAt': '2017-07-23T00:00:00.000Z',
      'createdAt': '2017-07-23T00:00:00.000Z',
      'progress': 34,
      'statusText': '运行中',
      'statusType': 'processing',
    }];

    this.loading = false;
    this.data = res;
    this.cdr.detectChanges();
  }

  stChange(e: STChange): void {
    switch (e.type) {
      case 'checkbox':
        this.selectedRows = e.checkbox;
        this.totalCallNo = this.selectedRows.reduce((total, cv) => total + cv.callNo, 0);
        this.cdr.detectChanges();
        break;
      case 'filter':
        this.getData();
        break;
    }
  }

  remove(): void {
    this.http.delete('/rule', { nos: this.selectedRows.map((i) => i.no).join(',') }).subscribe(() => {
      this.getData();
      this.st.clearCheck();
    });
  }

  approval(): void {
    this.msg.success(`审批了 ${this.selectedRows.length} 笔`);
  }

  showDetail(no: any): void {
    this.modalHelper
      .open(CfgDetailComponent,
        {},
        800,
        {
          nzTitle: '配置详情',
          nzMaskClosable: false,
        })
      .pipe(filter(w => w === true))
      .subscribe((result) => {
        // this.getListData();
      });
  }

  add(): void {
    // this.modalSrv.create({
    //   nzTitle: '新建规则',
    //   nzContent: tpl,
    //   nzOnOk: () => {
    //     this.loading = true;
    //     this.http.post('/rule', { description: this.description }).subscribe(() => this.getData());
    //   },
    // });
    this.modalHelper
      .open(CfgFormComponent,
        {},
        800,
        {
          nzTitle: '配置管理',
          nzMaskClosable: false,
        })
      .pipe(filter(w => w === true))
      .subscribe((result) => {
        // this.getListData();
      });
  }

  reset(): void {
    // wait form reset updated finished
    setTimeout(() => this.getData());
  }

  export(): void {
  }
}

