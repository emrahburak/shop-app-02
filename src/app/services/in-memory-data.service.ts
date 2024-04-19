import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Product } from '../model/product';
import { Cart } from '../model/cart';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDataService {

  constructor() { }

  createDb() {

    const cartItems: Cart =
    {
      id: 12,
      products: [
        {
          id: 1,
          category_id: 1,
          name: "SportZone Pro Hook Series",
          price: 99,
          color: 'Red',
          image: '../../assets/images/product-06.jpg',
          quantity: 2,
          description: "This product is  is designed for optimal comfort and performance. It allows for unrestricted movement and keeps you cool during intense workouts. Perfect for athletes and fitness enthusiasts looking to elevate their workout attire"
        }
      ]
    }

    return { cartItems }
  }

  genId(products: Product[]): number {
    return products.length > 0 ? Math.max(...products.map(product => product.id)) + 1 : 13;
  }


}
