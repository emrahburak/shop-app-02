import { Injectable } from '@angular/core';
import { Observable, filter, map, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Category } from '../model/category';
import { Categories } from '../state/mock-category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {


  category: Category | undefined

  constructor() { }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getCategoryByName(name: string): Observable<Category> | any {
    const categories$ = of(Categories)
    return categories$.pipe(
      map(categories => categories.find(category => category.name === name))
    )
  }

  getCategoryById(id: number): Observable<Category> | any {
    return of(Categories).pipe(
      map(categories => categories.find(category => category.id === id)),
      filter(category => !!category),
      catchError(this.handleError<Category>('getCategoryById id ' + id))
    )
  }

}
