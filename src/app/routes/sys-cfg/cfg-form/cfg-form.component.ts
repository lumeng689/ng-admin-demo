import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalRef } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-cfg-form',
  templateUrl: './cfg-form.component.html',
  styleUrls: ['./cfg-form.component.less'],
})
export class CfgFormComponent implements OnInit {
  form: FormGroup;
  submitting = false;

  constructor(private fb: FormBuilder,
              private msg: NzMessageService,
              private subject: NzModalRef,
              private cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      title: [null, [Validators.required]],
      no: [null, [Validators.required]],
      region: [null, [Validators.required]],
      type: [null, []],
      ip: [null, []],
      desc: [null, []],
    });
  }

  submit(): void {
    console.log('=========================');
    this.submitting = true;
    setTimeout(() => {
      this.submitting = false;
      this.msg.success(`提交成功`);
      this.cdr.detectChanges();
    }, 1000);
  }

  cancel() {
    this.subject.destroy();
  }
}
