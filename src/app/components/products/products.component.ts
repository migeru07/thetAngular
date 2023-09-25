import { Component } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  myShoppingCart: Product[] = [];

  onAddToShoppingCart(product: Product) {
    this.myShoppingCart.push(product);
  }

  products: Product[] = [
    {
      id: '1',
      name: 'El mejor juguete',
      price: 565,
      image: './assets/images/toy.jpg'
    },
    {
      id: '2',
      name: 'El mejor libro',
      price: 666,
      image: './assets/images/books.jpg'
    },
    {
      id: '3',
      name: 'Music record',
      price: 7846,
      image: './assets/images/album.jpg'
    },
    {
      id: '4',
      name: 'Segundo libro',
      price: 666,
      image: './assets/images/books.jpg'
    },
    {
      id: '5',
      name: 'The Music record',
      price: 7846,
      image: './assets/images/album.jpg'
    },
    {
      id: '6',
      name: 'The toy',
      price: 565,
      image: './assets/images/toy.jpg'
    },
  ]

}
