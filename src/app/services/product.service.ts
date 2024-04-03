import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Product} from '../model/product';
import {MockProducts} from '../state/mock-products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts(): Observable<Product[]>{
    const products = of(MockProducts)
    return products
  }

  getProductsByCategory(id:number):Observable<Product[]> {
    const products = of(MockProducts.filter(product => product.category_id === id))
    return products
  }
}
