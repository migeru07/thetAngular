import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'thetAngular';

  public name: string | number = 'Miguel';
  age:number = 33;

  verdadero: boolean = true;
  buttonLabel: string = 'Presiona este boton';

  person = {
    name: 'Miguel',
    age: 25, 
    photo: 'https://fastly.picsum.photos/id/866/300/300.jpg?hmac=9qmLpcaT9TgKd6PD37aZJZ_7QvgrVFMcvI3JQKWVUIQ'
  }

  toggleButton() { 
    this.verdadero = !this.verdadero;
  }

}
