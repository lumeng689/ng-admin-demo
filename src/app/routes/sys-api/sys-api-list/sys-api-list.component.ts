import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { STChange, STColumn, STComponent, STData } from '@delon/abc/st';
import { _HttpClient } from '@delon/theme';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';
import { map, tap } from 'rxjs/operators';


@Component({
  selector: 'app-sys-api-list',
  templateUrl: './sys-api-list.component.html',
  styleUrls: ['./sys-api-list.component.less'],
})
export class SysApiListComponent implements OnInit {
  q = {
    pi: 1,
    ps: 10,
    no: '',
    name: '',
    sorter: '',
    status: null,
    statusList: [],
  };
  data: any[] = [];
  loading = false;
  status = [
    { index: 0, text: '全部', value: false, type: 'default', checked: false },
    { index: 1, text: '在线', value: false, type: 'default', checked: false },
    { index: 2, text: '离线', value: false, type: 'success', checked: false },
  ];
  @ViewChild('st', { static: true })
  st: STComponent;
  columns: STColumn[] = [
    { title: '', index: 'key', type: 'checkbox' },
    { title: 'ID', index: 'no' },
    { title: '用户名', index: 'username' },
    { title: '头像', type: 'img', width: 60, index: 'avatar' },
    { title: '角色', index: 'role' },
    { title: '邮箱', index: 'email' },
    { title: '电话', index: 'phone' },
    {
      title: '状态',
      type: 'badge',
      index: 'status',
      badge: {
        0: { text: '在线', color: 'success' },
        1: { text: '离线', color: 'warning' },
      },
    },
    { title: '最后登录时间', index: 'createdAt' },
    { title: '描述', index: 'description' },
    {
      title: '操作',
      buttons: [
        {
          text: '编辑',
          click: (item) => this.msg.success(`配置${item.no}`),
        },
        {
          text: '停用',
          click: (item) => this.msg.success(`下线${item.no}`),
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
      'no': '0',
      'role': '管理员',
      'username': '小张',
      'description': '网络管理员',
      'callNo': 903,
      'status': 1,
      'updatedAt': '2020-08-01T14:00:00.000Z',
      'createdAt': '2020-08-01T14:15:00.000Z',
      'progress': 77,
      'statusText': '运行中',
      'statusType': 'processing',
    }, {
      'key': 1,
      'disabled': false,
      'href': 'https://ant.design',
      'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png',
      'no': '1',
      'role': '普通用户',
      'username': '小李',
      'description': '安全员',
      'callNo': 823,
      'status': 1,
      'updatedAt': '2020-10-01T00:00:00.000Z',
      'createdAt': '2020-10-01T12:00:55.000Z',
      'progress': 41,
      'statusText': '运行中',
      'statusType': 'processing',
    }, {
      'key': 2,
      'disabled': false,
      'href': 'https://ant.design',
      'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png',
      'no': '2',
      'role': '管理员',
      'username': '小王',
      'description': '电梯管理员',
      'callNo': 484,
      'status': 0,
      'updatedAt': '2020-09-02T00:00:00.000Z',
      'createdAt': '2020-09-02T09:05:00.000Z',
      'progress': 78,
      'statusText': '关闭',
      'statusType': 'default',
    }, {
      'key': 3,
      'disabled': false,
      'href': 'https://ant.design',
      'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png',
      'no': '3',
      'role': '普通用户',
      'username': '小刘',
      'description': '系统维护管理员',
      'callNo': 249,
      'status': 0,
      'updatedAt': '2020-10-02T00:00:00.000Z',
      'createdAt': '2020-10-02T08:48:32.000Z',
      'progress': 67,
      'statusText': '已上线',
      'statusType': 'success',
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
}
