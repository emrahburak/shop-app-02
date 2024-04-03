import { Injectable } from '@angular/core';
import { Observable, catchError, map, of, throwError } from 'rxjs';
import { Category } from '../model/category';
import { Categories } from '../state/mock-category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {


  category: Category | undefined

  constructor() { }

  getCategoryByName(name: string): Observable<Category> | any {
    const categories$ = of(Categories)
    return categories$.pipe(
      map(categories => categories.find(category => category.name === name))
    )
  }

  getCategoryById(id: number): Observable<Category> | any {
    const categories$ = of(Categories)
    categories$.pipe(
      map(categories => categories.find(category => category.id === id))
    ).subscribe(category => this.category = category)
    return this.category

  }
}
