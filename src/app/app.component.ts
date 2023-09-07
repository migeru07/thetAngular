import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'thetAngular';

  imgParent = 'https://www.w3schools.com/howto/img_avatar2.png';

  onLoaded(img: unknown) {
    console.log('El Padre dice que el hijo dice que cargo', img);
  }

  register = {
    name: '',
    email: '',
    pass: '',
  }

  public name: string | number = 'Miguel';
  age = 0;
  names: unknown[] = ['Nico', 'Juli', 'Migui', 'Yenni', "Three", 'Rossy', 'Laura', 'Peter'];

  widthImg = 100;

  verdadero = true;
  buttonLabel = 'Presiona este boton';

  showCondition = false;

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

  variable = '';
  newName = '';
  addName() {
    this.names.push(this.newName);
    this.newName = '';
  }

  deleteName(index: number) {
    this.names.splice(index, 1);
  }

}
