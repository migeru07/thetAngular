import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent {

  @Input()  img: string = 'Valor del hijo';

  @Output() loaded = new EventEmitter<Object>();

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
