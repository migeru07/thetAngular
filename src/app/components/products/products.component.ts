import { Component, OnInit } from '@angular/core';
import { CreateProductDTO, Product, UpdateProductDTO } from 'src/app/models/product.model';
import { StoreService } from 'src/app/services/store.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];

  productChosen: Product = {
    id: 0,
    price: 0,
    images: [],
    title: '',
    category: {
      id: '',
      name: ''
    },
    description: ''
  };


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
      this.toggleProductDetail();
      this.productChosen = data;
    })
  }

  createNewProduct() {
    const product: CreateProductDTO = {
      title: 'Camisa Force Slim Fit',
      description: 'Bella Camisa blanca con los brazos  cruzados y que el usuario no se puede quitar',
      images: [`https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Modelo_en_camisa_de_fuerza.jpg/800px-Modelo_en_camisa_de_fuerza.jpg`],
      price: 2303,
      categoryId: 2
    }
    this.productsService.create(product)
    .subscribe(data => {
      this.products.unshift(data)
    });
  }

  updateProduct() {
    const changes: UpdateProductDTO ={
      price: 2000
    }
    const id = this.productChosen.id;
    this.productsService.update(id, changes)
    .subscribe( data => {
      const productIndex = this.products.findIndex(
        item => item.id === this.productChosen.id
      );
      this.products[productIndex] = data;
      this.productChosen = data;
    });
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
