import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-layer-btn',
  templateUrl: './layer-btn.component.html',
  styleUrls: ['./layer-btn.component.less'],
})
export class LayerBtnComponent implements OnInit {

  @Output() dropDownChange = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  changeMap(val: any): void {
    console.log('*********' + val);
    this.dropDownChange.emit(val);
  }
}
