import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { STChange, STColumn, STComponent, STData } from '@delon/abc/st';
import { _HttpClient } from '@delon/theme';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-sys-data-list',
  templateUrl: './sys-data-list.component.html',
  styleUrls: ['./sys-data-list.component.less']
})
export class SysDataListComponent implements OnInit {
  q = {
    pi: 1,
    ps: 10,
    no: '',
    date: '',
    sorter: '',
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
    { title: '时间', index: 'updatedAt' },
    { title: '设备类型', index: 'no' },
    { title: '设备编号', index: 'key' },
    { title: '故障数量（次）', index: 'progress' },
    { title: '剩余寿命估计', index: 'callNo' },
    { title: '可靠性预测', index: 'statusText' },
    {
      title: '操作',
      buttons: [
        {
          text: '配置',
          click: (item) => this.msg.success(`配置${item.no}`),
        }
      ],
    },
  ];
  selectedRows: STData[] = [];
  description = '';
  totalCallNo = 0;
  expandForm = false;

  constructor(private http: _HttpClient, public msg: NzMessageService, private modalSrv: NzModalService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.loading = true;
    this.q.statusList = this.status.filter((w) => w.checked).map((item) => item.index);
    if (this.q.status !== null && this.q.status > -1) {
      this.q.statusList.push(this.q.status);
    }


    let res = [{"key":0,"disabled":true,"href":"https://ant.design","avatar":"https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png","no":"设备 0","title":"一个任务名称 0","owner":"曲丽丽","description":"这是一段描述","callNo":903,"status":1,"updatedAt":"2017-07-01 13:00:00.000Z","createdAt":"2017-07-01 13:00:00.000Z","progress":77,"statusText":"运行中","statusType":"processing"},{"key":1,"disabled":false,"href":"https://ant.design","avatar":"https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png","no":"设备 1","title":"一个任务名称 1","owner":"曲丽丽","description":"这是一段描述","callNo":823,"status":1,"updatedAt":"2017-07-01 13:00:00.000Z","createdAt":"2017-07-01 13:00:00.000Z","progress":41,"statusText":"运行中","statusType":"processing"},{"key":2,"disabled":false,"href":"https://ant.design","avatar":"https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png","no":"设备 2","title":"一个任务名称 2","owner":"曲丽丽","description":"这是一段描述","callNo":484,"status":0,"updatedAt":"2020-10-02 13:00:00.000Z","createdAt":"2020-10-02 13:00:00.000Z","progress":78,"statusText":"关闭","statusType":"default"},{"key":3,"disabled":false,"href":"https://ant.design","avatar":"https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png","no":"设备 3","title":"一个任务名称 3","owner":"曲丽丽","description":"这是一段描述","callNo":249,"status":2,"updatedAt":"2020-10-02 13:00:00.000Z","createdAt":"2020-10-02 13:00:00.000Z","progress":67,"statusText":"已上线","statusType":"success"},{"key":4,"disabled":false,"href":"https://ant.design","avatar":"https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png","no":"设备 4","title":"一个任务名称 4","owner":"曲丽丽","description":"这是一段描述","callNo":831,"status":1,"updatedAt":"2017-07-03 13:00:00.000Z","createdAt":"2017-07-03 13:00:00.000Z","progress":95,"statusText":"运行中","statusType":"processing"},{"key":5,"disabled":false,"href":"https://ant.design","avatar":"https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png","no":"设备 5","title":"一个任务名称 5","owner":"曲丽丽","description":"这是一段描述","callNo":214,"status":2,"updatedAt":"2017-07-03 13:00:00.000Z","createdAt":"2017-07-03 13:00:00.000Z","progress":12,"statusText":"已上线","statusType":"success"},{"key":6,"disabled":true,"href":"https://ant.design","avatar":"https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png","no":"设备 6","title":"一个任务名称 6","owner":"曲丽丽","description":"这是一段描述","callNo":348,"status":2,"updatedAt":"2017-07-04 13:00:00.000Z","createdAt":"2017-07-04 13:00:00.000Z","progress":23,"statusText":"已上线","statusType":"success"},{"key":7,"disabled":false,"href":"https://ant.design","avatar":"https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png","no":"设备 7","title":"一个任务名称 7","owner":"曲丽丽","description":"这是一段描述","callNo":45,"status":0,"updatedAt":"2017-07-04 13:00:00.000Z","createdAt":"2017-07-04 13:00:00.000Z","progress":68,"statusText":"关闭","statusType":"default"},{"key":8,"disabled":false,"href":"https://ant.design","avatar":"https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png","no":"设备 8","title":"一个任务名称 8","owner":"曲丽丽","description":"这是一段描述","callNo":274,"status":0,"updatedAt":"2017-07-05 13:00:00.000Z","createdAt":"2017-07-05 13:00:00.000Z","progress":52,"statusText":"关闭","statusType":"default"},{"key":9,"disabled":false,"href":"https://ant.design","avatar":"https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png","no":"设备 9","title":"一个任务名称 9","owner":"曲丽丽","description":"这是一段描述","callNo":825,"status":3,"updatedAt":"2017-07-05 13:00:00.000Z","createdAt":"2017-07-05 13:00:00.000Z","progress":66,"statusText":"异常","statusType":"error"},{"key":10,"disabled":false,"href":"https://ant.design","avatar":"https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png","no":"设备 10","title":"一个任务名称 10","owner":"曲丽丽","description":"这是一段描述","callNo":337,"status":2,"updatedAt":"2017-07-06 13:00:00.000Z","createdAt":"2017-07-06 13:00:00.000Z","progress":85,"statusText":"已上线","statusType":"success"},{"key":11,"disabled":false,"href":"https://ant.design","avatar":"https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png","no":"设备 11","title":"一个任务名称 11","owner":"曲丽丽","description":"这是一段描述","callNo":659,"status":1,"updatedAt":"2017-07-06 13:00:00.000Z","createdAt":"2017-07-06 13:00:00.000Z","progress":84,"statusText":"运行中","statusType":"processing"},{"key":12,"disabled":true,"href":"https://ant.design","avatar":"https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png","no":"设备 12","title":"一个任务名称 12","owner":"曲丽丽","description":"这是一段描述","callNo":305,"status":2,"updatedAt":"2017-07-07 13:00:00.000Z","createdAt":"2017-07-07 13:00:00.000Z","progress":58,"statusText":"已上线","statusType":"success"},{"key":13,"disabled":false,"href":"https://ant.design","avatar":"https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png","no":"设备 13","title":"一个任务名称 13","owner":"曲丽丽","description":"这是一段描述","callNo":395,"status":1,"updatedAt":"2017-07-07 13:00:00.000Z","createdAt":"2017-07-07 13:00:00.000Z","progress":17,"statusText":"运行中","statusType":"processing"},{"key":14,"disabled":false,"href":"https://ant.design","avatar":"https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png","no":"设备 14","title":"一个任务名称 14","owner":"曲丽丽","description":"这是一段描述","callNo":33,"status":1,"updatedAt":"2017-07-08 13:00:00.000Z","createdAt":"2017-07-08 13:00:00.000Z","progress":100,"statusText":"运行中","statusType":"processing"},{"key":15,"disabled":false,"href":"https://ant.design","avatar":"https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png","no":"设备 15","title":"一个任务名称 15","owner":"曲丽丽","description":"这是一段描述","callNo":852,"status":0,"updatedAt":"2017-07-08 13:00:00.000Z","createdAt":"2017-07-08 13:00:00.000Z","progress":10,"statusText":"关闭","statusType":"default"},{"key":16,"disabled":false,"href":"https://ant.design","avatar":"https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png","no":"设备 16","title":"一个任务名称 16","owner":"曲丽丽","description":"这是一段描述","callNo":469,"status":1,"updatedAt":"2017-07-09 13:00:00.000Z","createdAt":"2017-07-09 13:00:00.000Z","progress":84,"statusText":"运行中","statusType":"processing"},{"key":17,"disabled":false,"href":"https://ant.design","avatar":"https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png","no":"设备 17","title":"一个任务名称 17","owner":"曲丽丽","description":"这是一段描述","callNo":856,"status":2,"updatedAt":"2017-07-09 13:00:00.000Z","createdAt":"2017-07-09 13:00:00.000Z","progress":92,"statusText":"已上线","statusType":"success"},{"key":18,"disabled":true,"href":"https://ant.design","avatar":"https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png","no":"设备 18","title":"一个任务名称 18","owner":"曲丽丽","description":"这是一段描述","callNo":124,"status":0,"updatedAt":"2017-07-10 13:00:00.000Z","createdAt":"2017-07-10 13:00:00.000Z","progress":67,"statusText":"关闭","statusType":"default"},{"key":19,"disabled":false,"href":"https://ant.design","avatar":"https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png","no":"设备 19","title":"一个任务名称 19","owner":"曲丽丽","description":"这是一段描述","callNo":461,"status":1,"updatedAt":"2017-07-10 13:00:00.000Z","createdAt":"2017-07-10 13:00:00.000Z","progress":50,"statusText":"运行中","statusType":"processing"},{"key":20,"disabled":false,"href":"https://ant.design","avatar":"https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png","no":"设备 20","title":"一个任务名称 20","owner":"曲丽丽","description":"这是一段描述","callNo":749,"status":2,"updatedAt":"2017-07-11 13:00:00.000Z","createdAt":"2017-07-11 13:00:00.000Z","progress":30,"statusText":"已上线","statusType":"success"},{"key":21,"disabled":false,"href":"https://ant.design","avatar":"https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png","no":"设备 21","title":"一个任务名称 21","owner":"曲丽丽","description":"这是一段描述","callNo":743,"status":3,"updatedAt":"2017-07-11 13:00:00.000Z","createdAt":"2017-07-11 13:00:00.000Z","progress":90,"statusText":"异常","statusType":"error"},{"key":22,"disabled":false,"href":"https://ant.design","avatar":"https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png","no":"设备 22","title":"一个任务名称 22","owner":"曲丽丽","description":"这是一段描述","callNo":166,"status":1,"updatedAt":"2017-07-12 13:00:00.000Z","createdAt":"2017-07-12 13:00:00.000Z","progress":96,"statusText":"运行中","statusType":"processing"},{"key":23,"disabled":false,"href":"https://ant.design","avatar":"https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png","no":"设备 23","title":"一个任务名称 23","owner":"曲丽丽","description":"这是一段描述","callNo":1,"status":1,"updatedAt":"2017-07-12 13:00:00.000Z","createdAt":"2017-07-12 13:00:00.000Z","progress":62,"statusText":"运行中","statusType":"processing"},{"key":24,"disabled":true,"href":"https://ant.design","avatar":"https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png","no":"设备 24","title":"一个任务名称 24","owner":"曲丽丽","description":"这是一段描述","callNo":57,"status":2,"updatedAt":"2017-07-13 13:00:00.000Z","createdAt":"2017-07-13 13:00:00.000Z","progress":8,"statusText":"已上线","statusType":"success"},{"key":25,"disabled":false,"href":"https://ant.design","avatar":"https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png","no":"设备 25","title":"一个任务名称 25","owner":"曲丽丽","description":"这是一段描述","callNo":759,"status":2,"updatedAt":"2017-07-13 13:00:00.000Z","createdAt":"2017-07-13 13:00:00.000Z","progress":31,"statusText":"已上线","statusType":"success"},{"key":26,"disabled":false,"href":"https://ant.design","avatar":"https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png","no":"设备 26","title":"一个任务名称 26","owner":"曲丽丽","description":"这是一段描述","callNo":109,"status":3,"updatedAt":"2017-07-14 13:00:00.000Z","createdAt":"2017-07-14 13:00:00.000Z","progress":77,"statusText":"异常","statusType":"error"},{"key":27,"disabled":false,"href":"https://ant.design","avatar":"https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png","no":"设备 27","title":"一个任务名称 27","owner":"曲丽丽","description":"这是一段描述","callNo":570,"status":3,"updatedAt":"2017-07-14 13:00:00.000Z","createdAt":"2017-07-14 13:00:00.000Z","progress":90,"statusText":"异常","statusType":"error"},{"key":28,"disabled":false,"href":"https://ant.design","avatar":"https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png","no":"设备 28","title":"一个任务名称 28","owner":"曲丽丽","description":"这是一段描述","callNo":332,"status":2,"updatedAt":"2017-07-15 13:00:00.000Z","createdAt":"2017-07-15 13:00:00.000Z","progress":46,"statusText":"已上线","statusType":"success"},{"key":29,"disabled":false,"href":"https://ant.design","avatar":"https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png","no":"设备 29","title":"一个任务名称 29","owner":"曲丽丽","description":"这是一段描述","callNo":153,"status":2,"updatedAt":"2017-07-15 13:00:00.000Z","createdAt":"2017-07-15 13:00:00.000Z","progress":44,"statusText":"已上线","statusType":"success"},{"key":30,"disabled":true,"href":"https://ant.design","avatar":"https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png","no":"设备 30","title":"一个任务名称 30","owner":"曲丽丽","description":"这是一段描述","callNo":763,"status":3,"updatedAt":"2017-07-16 13:00:00.000Z","createdAt":"2017-07-16 13:00:00.000Z","progress":55,"statusText":"异常","statusType":"error"},{"key":31,"disabled":false,"href":"https://ant.design","avatar":"https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png","no":"设备 31","title":"一个任务名称 31","owner":"曲丽丽","description":"这是一段描述","callNo":338,"status":2,"updatedAt":"2017-07-16 13:00:00.000Z","createdAt":"2017-07-16 13:00:00.000Z","progress":42,"statusText":"已上线","statusType":"success"},{"key":32,"disabled":false,"href":"https://ant.design","avatar":"https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png","no":"设备 32","title":"一个任务名称 32","owner":"曲丽丽","description":"这是一段描述","callNo":370,"status":1,"updatedAt":"2017-07-17 13:00:00.000Z","createdAt":"2017-07-17 13:00:00.000Z","progress":49,"statusText":"运行中","statusType":"processing"},{"key":33,"disabled":false,"href":"https://ant.design","avatar":"https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png","no":"设备 33","title":"一个任务名称 33","owner":"曲丽丽","description":"这是一段描述","callNo":345,"status":0,"updatedAt":"2017-07-17 13:00:00.000Z","createdAt":"2017-07-17 13:00:00.000Z","progress":10,"statusText":"关闭","statusType":"default"},{"key":34,"disabled":false,"href":"https://ant.design","avatar":"https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png","no":"设备 34","title":"一个任务名称 34","owner":"曲丽丽","description":"这是一段描述","callNo":301,"status":1,"updatedAt":"2017-07-18 13:00:00.000Z","createdAt":"2017-07-18 13:00:00.000Z","progress":84,"statusText":"运行中","statusType":"processing"},{"key":35,"disabled":false,"href":"https://ant.design","avatar":"https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png","no":"设备 35","title":"一个任务名称 35","owner":"曲丽丽","description":"这是一段描述","callNo":388,"status":1,"updatedAt":"2017-07-18 13:00:00.000Z","createdAt":"2017-07-18 13:00:00.000Z","progress":48,"statusText":"运行中","statusType":"processing"},{"key":36,"disabled":true,"href":"https://ant.design","avatar":"https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png","no":"设备 36","title":"一个任务名称 36","owner":"曲丽丽","description":"这是一段描述","callNo":407,"status":0,"updatedAt":"2017-07-19 13:00:00.000Z","createdAt":"2017-07-19 13:00:00.000Z","progress":23,"statusText":"关闭","statusType":"default"},{"key":37,"disabled":false,"href":"https://ant.design","avatar":"https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png","no":"设备 37","title":"一个任务名称 37","owner":"曲丽丽","description":"这是一段描述","callNo":42,"status":1,"updatedAt":"2017-07-19 13:00:00.000Z","createdAt":"2017-07-19 13:00:00.000Z","progress":5,"statusText":"运行中","statusType":"processing"},{"key":38,"disabled":false,"href":"https://ant.design","avatar":"https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png","no":"设备 38","title":"一个任务名称 38","owner":"曲丽丽","description":"这是一段描述","callNo":584,"status":1,"updatedAt":"2017-07-20 13:00:00.000Z","createdAt":"2017-07-20 13:00:00.000Z","progress":34,"statusText":"运行中","statusType":"processing"},{"key":39,"disabled":false,"href":"https://ant.design","avatar":"https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png","no":"设备 39","title":"一个任务名称 39","owner":"曲丽丽","description":"这是一段描述","callNo":169,"status":0,"updatedAt":"2017-07-20 13:00:00.000Z","createdAt":"2017-07-20 13:00:00.000Z","progress":91,"statusText":"关闭","statusType":"default"},{"key":40,"disabled":false,"href":"https://ant.design","avatar":"https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png","no":"设备 40","title":"一个任务名称 40","owner":"曲丽丽","description":"这是一段描述","callNo":564,"status":0,"updatedAt":"2017-07-21 13:00:00.000Z","createdAt":"2017-07-21 13:00:00.000Z","progress":85,"statusText":"关闭","statusType":"default"},{"key":41,"disabled":false,"href":"https://ant.design","avatar":"https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png","no":"设备 41","title":"一个任务名称 41","owner":"曲丽丽","description":"这是一段描述","callNo":409,"status":0,"updatedAt":"2017-07-21 13:00:00.000Z","createdAt":"2017-07-21 13:00:00.000Z","progress":8,"statusText":"关闭","statusType":"default"},{"key":42,"disabled":true,"href":"https://ant.design","avatar":"https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png","no":"设备 42","title":"一个任务名称 42","owner":"曲丽丽","description":"这是一段描述","callNo":125,"status":1,"updatedAt":"2017-07-22 13:00:00.000Z","createdAt":"2017-07-22 13:00:00.000Z","progress":12,"statusText":"运行中","statusType":"processing"},{"key":43,"disabled":false,"href":"https://ant.design","avatar":"https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png","no":"设备 43","title":"一个任务名称 43","owner":"曲丽丽","description":"这是一段描述","callNo":525,"status":1,"updatedAt":"2017-07-22 13:00:00.000Z","createdAt":"2017-07-22 13:00:00.000Z","progress":84,"statusText":"运行中","statusType":"processing"},{"key":44,"disabled":false,"href":"https://ant.design","avatar":"https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png","no":"设备 44","title":"一个任务名称 44","owner":"曲丽丽","description":"这是一段描述","callNo":693,"status":1,"updatedAt":"2017-07-23 13:00:00.000Z","createdAt":"2017-07-23 13:00:00.000Z","progress":55,"statusText":"运行中","statusType":"processing"},{"key":45,"disabled":false,"href":"https://ant.design","avatar":"https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png","no":"设备 45","title":"一个任务名称 45","owner":"曲丽丽","description":"这是一段描述","callNo":284,"status":1,"updatedAt":"2017-07-23 13:00:00.000Z","createdAt":"2017-07-23 13:00:00.000Z","progress":34,"statusText":"运行中","statusType":"processing"}];

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

  add(tpl: TemplateRef<{}>): void {
    this.modalSrv.create({
      nzTitle: '新建规则',
      nzContent: tpl,
      nzOnOk: () => {
        this.loading = true;
        this.http.post('/rule', { description: this.description }).subscribe(() => this.getData());
      },
    });
  }

  reset(): void {
    // wait form reset updated finished
    setTimeout(() => this.getData());
  }

  export(): void {

  }
}
