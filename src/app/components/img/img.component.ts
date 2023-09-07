import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent {

  //@Input('img') img: string = '';
  img = '';
  @Input()
  set changeImg(newImg: string) {
    this.img = newImg;
    console.log('La URL cambió', this.img);

  }

  @Output() loaded = new EventEmitter<object>();

  imageDefault: string = './../../../assets/images/default.png'

  imgError() {
    this.img = this.imageDefault;
  }

  valores = {
    valorA: 0,
    valorB: 4,
    valorC: 5
  }

  imgLoaded() {
    console.log('El hijo dice que cargo');
    this.loaded.emit(this.valores);
  }
}
