import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from '../model/product';
import { Observable, of } from 'rxjs';
import { catchError, filter, map, tap } from 'rxjs/operators';
import { Cart } from '../model/cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {


  private cartItemsUrl = "ap/cartItems"

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  constructor(private http: HttpClient) {
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getCartItems(): Observable<Cart> {
    return this.http.get<Cart>(this.cartItemsUrl)
      .pipe(
        tap(_ => console.log("fetched cartItems")),
        catchError(this.handleError<Cart>('getCartItems', ))
      )
  }

  getCart(id: number): Observable<Cart> {
    const url = `${this.cartItemsUrl}/${id}`;
    return this.http.get<Cart>(url)
      .pipe(
        tap(_ => console.log("Fetched cart")),
        catchError(this.handleError<Cart>('getCart id=' + id))
      )
  }

  updateCart(cart: Cart): Observable<Cart> {
    return this.http.put<Cart>(this.cartItemsUrl, this.httpOptions)
      .pipe(
        tap((newCart: Cart) => console.log(`update cartId = ${newCart.id}`)),
        catchError(this.handleError<any>('update cart'))
      )
  }

  addCart(cart: Cart): Observable<Cart> {
    return this.http.post<Cart>(this.cartItemsUrl, this.httpOptions)
      .pipe(
        tap((newCart: Cart) => console.log(`Save cartId = ${newCart.id}`)),
        catchError(this.handleError<Cart>('Save cart'))
      )
  }

  deleteCart(id: number): Observable<Cart> {

    const url = `${this.cartItemsUrl}/${id}`;
    return this.http.delete<Cart>(url, this.httpOptions)
      .pipe(
        tap(_ => console.log(`delete cart id=${id}`)),
        catchError(this.handleError<Cart>('deleted'))
      )
  }






}
