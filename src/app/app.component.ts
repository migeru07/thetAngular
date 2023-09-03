import { Component } from '@angular/core';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'thetAngular';

  imgParent = 'https://www.w3schools.com/howto/img_avatar2.png';

  onLoaded(img: Object) {
    console.log('El Padre dice que el hijo dice que cargo', img);
  }



  register = {
    name: '',
    email: '',
    pass: '',
  }


  public name: string | number = 'Miguel';
  age:number = 0;
  names: any[] = ['Nico', 'Juli', 'Migui', 'Yenni', "Three", 'Rossy', 'Laura', 'Peter'];

  widthImg: number = 100;

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
    },
      {
        name: 'Segundo libro',
        price: 666,
        image: './assets/images/books.jpg'
      },
    {
      name: 'The Music record',
      price: 7846,
      image: './assets/images/album.jpg'
    },
    {
      name: 'The toy',
      price: 565,
      image: './assets/images/toy.jpg'
    },
  ]

  verdadero: boolean = true;
  buttonLabel: string = 'Presiona este boton';

  showCondition: boolean = false;



  person = {
    name: 'Miguel',
    age: 25,
    photo: 'https://fastly.picsum.photos/id/866/300/300.jpg?hmac=9qmLpcaT9TgKd6PD37aZJZ_7QvgrVFMcvI3JQKWVUIQ'
  }
  persona = [
    {
      name: 'Miguel',
      age: 25,
      photo: 'https://fastly.picsum.photos/id/866/300/300.jpg?hmac=9qmLpcaT9TgKd6PD37aZJZ_7QvgrVFMcvI3JQKWVUIQ'
    },
    {
      name: 'Juan',
      age: 25,
      photo: 'https://fastly.picsum.photos/id/866/300/300.jpg?hmac=9qmLpcaT9TgKd6PD37aZJZ_7QvgrVFMcvI3JQKWVUIQ'
    },
    {
      name: 'Lucas',
      age: 33,
      photo: 'https://fastly.picsum.photos/id/866/300/300.jpg?hmac=9qmLpcaT9TgKd6PD37aZJZ_7QvgrVFMcvI3JQKWVUIQ'
    }
  ]

  valHR = {
    valid: this.persona[2].name,
    invalid: this.persona[2].name
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
