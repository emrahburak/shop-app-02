import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDataService {

  constructor() { }

  createDb() {
    const products = new Array()
    return { products }
  }

  genId(products: Product[]): number {
    return products.length > 0 ? Math.max(...products.map(product => product.id)) + 1 : 13;
  }


}
