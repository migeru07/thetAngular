import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { StoreService } from 'src/app/services/store.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];


  showProductDetail = false;
  today = new Date();
  date = new Date(2021,1,21);

  constructor(
    private storeService: StoreService,
    private productsService: ProductsService
  ) {
    this.myShoppingCart = this.storeService.getShoppingCart();
  }

  ngOnInit() {
    this.productsService.getAllProducts().subscribe(data => {
      this.products = data;
    })
  }

  toggleProductDetail() {
    this.showProductDetail = !this.showProductDetail
  }

  onShowDetail(id: number) {
    this.productsService.getProduct(id).subscribe(data => {
      console.log('product', data);

    })

  }



  // products: Product[] = [
  //   {
  //     id: '1',
  //     name: 'El mejor juguete',
  //     price: 565,
  //     image: './assets/images/toy.jpg'
  //   },
  //   {
  //     id: '2',
  //     name: 'El mejor libro',
  //     price: 666,
  //     image: './assets/images/books.jpg'
  //   },
  //   {
  //     id: '3',
  //     name: 'Music record',
  //     price: 7846,
  //     image: './assets/images/album.jpg'
  //   },
  //   {
  //     id: '4',
  //     name: 'Segundo libro',
  //     price: 666,
  //     image: './assets/images/books.jpg'
  //   },
  //   {
  //     id: '5',
  //     name: 'The Music record',
  //     price: 7846,
  //     image: './assets/images/album.jpg'
  //   },
  //   {
  //     id: '6',
  //     name: 'The toy',
  //     price: 565,
  //     image: './assets/images/toy.jpg'
  //   },
  // ]


  total: number = 0;
  myShoppingCart: Product[] = [];

  onAddToShoppingCart(product: Product) {
    this.storeService.addProduct(product);
    this.total = this.storeService.getTotal();
  }
}
