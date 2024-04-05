import { Injectable } from '@angular/core';
import { Observable, of, map, filter } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Product } from '../model/product';
import { MockProducts } from '../state/mock-products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  constructor() { }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getProducts(): Observable<Product[]> {
    const products = of(MockProducts)
    return products
  }

  getProductsByCategory(id: number): Observable<Product[]> {
    const products = of(MockProducts.filter(product => product.category_id === id))
    return products
  }

  getProductById(id: number): Observable<Product> | any {
    return of(MockProducts).pipe(
      map(products => products.find(product => product.id === id)),
      filter(product => !!product),
      catchError(this.handleError<Product>('getProductById id: '+ id))
    )
  }

}
