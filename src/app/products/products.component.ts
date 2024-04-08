import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { CategoryService } from '../services/category.service';
import { Product } from '../model/product';
import { Category } from '../model/category';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  @Input() display: string | undefined
  @Input() isSlice = false
  @Input() category: string | undefined

  gloves: Product[] = []
  shirts: Product[] = []
  glove: Category | undefined
  shirt: Category | undefined
  gloveStr = "glove"
  shirtStr = "shirt"
  related = ""

  constructor(private productService: ProductService, private categoryService: CategoryService) {
  }

  ngOnInit(): void {
    this.categoryService.getCategoryByName(this.gloveStr.toLowerCase().trim())
      .subscribe((category: Category) => {
        this.glove = category;
      })

    this.categoryService.getCategoryByName(this.shirtStr.toLowerCase().trim())
      .subscribe((category: Category) => this.shirt = category)

    if (this.glove && typeof this.glove.id === 'number') {
      this.productService.getProductsByCategory(this.glove?.id).subscribe(products => { this.gloves = products; this.gloves = products })
    }

    if (this.shirt && typeof this.shirt.id === 'number') {
      this.productService.getProductsByCategory(this.shirt?.id).subscribe(products => { this.shirts = products; this.shirts = products })
    }


  }


    getFilteredProducts(category: string, limit ?: number): Product[] {
      if (category === 'glove') {
        return this.gloves.slice(0, limit || this.gloves.length);
      } else if (category === 'shirt') {
        return this.shirts.slice(0, limit || this.shirts.length);
      } else {
        // Handle cases where category is not 'gloveStr' or 'shirtStr'
        return []; // Or return a default product list
      }
    }


}
