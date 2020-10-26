import { AfterViewInit, Component, ElementRef, Inject, NgZone, OnInit, Renderer2, ViewChild } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { NzMessageService } from 'ng-zorro-antd/message';
import { I18NService } from '@core';

@Component({
  selector: 'app-correlation-analysis',
  templateUrl: './correlation-analysis.component.html',
  styleUrls: ['./correlation-analysis.component.less'],
})
export class CorrelationAnalysisComponent implements OnInit, AfterViewInit {

  @ViewChild('mapLayerCanvas', { static: false })
  mapLayerCanvasElem: ElementRef;
  mapLayerCanvas: CanvasRenderingContext2D;

  mapSrc = 'assets/tmp/img/tttt1.jpg';

  imageRect = {
    width: 0,
    height: 0,
    naturalWidth: 0,
    naturalHeight: 0,
  };

  constructor(private msg: NzMessageService,
              private ngZone: NgZone,
              private renderer: Renderer2,
              @Inject(DOCUMENT) private doc: Document,
              private i18n: I18NService) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    const elm = this.mapLayerCanvasElem.nativeElement as HTMLCanvasElement;
    this.mapLayerCanvas = elm.getContext('2d');
  }

  onImageLoaded(evt: any): void {
    this.imageRect = {
      width: evt.target.width,
      naturalWidth: evt.target.naturalWidth,
      height: evt.target.height,
      naturalHeight: evt.target.naturalHeight,
    };

    console.log('image rect info...');
    console.dir(this.imageRect);
    this.resetCanvasRect();
    const img = this.doc.querySelector('.alert-point') as HTMLImageElement;
    this.mapLayerCanvas.drawImage(img, 300, 300);

    this.createErrorContainer();
  }

  createErrorContainer(): void {
    // Use Angular's Renderer2 to create the div element
    const errorContainer = this.renderer.createElement('div') as HTMLDivElement;
    const ul = this.renderer.createElement('ul') as HTMLUListElement;
    const li1 = this.renderer.createElement('li') as HTMLLIElement;
    li1.append('故障设备：');
    const li2 = this.renderer.createElement('li') as HTMLLIElement;
    li2.append('故障类型：');
    const li3 = this.renderer.createElement('li') as HTMLLIElement;
    li3.append('发生时间：');
    const li4 = this.renderer.createElement('li') as HTMLLIElement;
    li4.append('受影响车站信息：');

    ul.append(li1, li2, li3, li4);
    errorContainer.append(ul);
    // Set the id of the div
    // this.renderer.setProperty(errorContainer, 'class', 'error-container');
    this.renderer.setAttribute(errorContainer, 'class', 'error-container')
    // Append the created div to the body element
    this.renderer.appendChild(document.body, errorContainer);
  }

  onImageChange(val: any): void {
    console.log(val);
    this.mapSrc = `assets/tmp/img/tttt${val}.jpg`;
  }

  resetCanvasRect(): void {
    const elm = this.mapLayerCanvasElem.nativeElement as HTMLCanvasElement;
    elm.width = this.imageRect.width;
    elm.height = this.imageRect.height;
  }
}
