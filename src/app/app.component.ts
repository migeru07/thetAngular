import { Component } from '@angular/core';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'thetAngular';

  public name: string | number = 'Miguel';
  age:number = 0;
  names: any[] = ['Nico', 'Juli', 'Migui', 'Yenni', 3, 'Rossy', 'Laura', 'Peter'];

  products: Product[] = [
    {
      name: 'El mejor juguete',
      price: 565,
      image: './assets/images/toy.jpg'
    },
    {
      name: 'El mejor libro',
      price: 666,
      image: './assets/images/books.jpg'
    },
    {
      name: 'Music record',
      price: 7846,
      image: './assets/images/album.jpg'
    }
  ]

  verdadero: boolean = true;
  buttonLabel: string = 'Presiona este boton';

  showCondition: boolean = false;

  person = {
    name: 'Miguel',
    age: 25, 
    photo: 'https://fastly.picsum.photos/id/866/300/300.jpg?hmac=9qmLpcaT9TgKd6PD37aZJZ_7QvgrVFMcvI3JQKWVUIQ'
  }

  toggleButton() { 
    this.verdadero = !this.verdadero;
  }
  mostrar() { 
    this.showCondition = true;
  }

  onScroll(event: Event) {
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }

  variable: string = '';

  newName = '';
  addName() {
    this.names.push(this.newName);
    this.newName = '';
  }

  deleteName(index: number) {
    this.names.splice(index, 1);
  }

}
