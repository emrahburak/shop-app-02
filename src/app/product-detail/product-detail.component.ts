import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { ProductService } from '../services/product.service';
import { CategoryService } from '../services/category.service'
import { Product } from '../model/product';
import { Category } from '../model/category';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit {

  faMinus = faMinus
  faPlus = faPlus
  product: Product | undefined
  category: Category | undefined
  products: Product[] | undefined

  constructor(private route: ActivatedRoute, private productService: ProductService, private categoryService: CategoryService) { }

  ngOnInit(): void {
    let routerParams = this.route.snapshot.paramMap
    let productId = Number(routerParams.get('id'))
    console.log("active route product id", productId)
    this.productService.getProductById(productId).subscribe((product: Product) => this.product = product)
    let category_id = Number(this.product?.category_id)
    this.categoryService.getCategoryById(category_id).subscribe((category: Category) => this.category = category)
    this.productService.getProductsByCategory(category_id).subscribe((products:Product[])=> this.products = products)
  }

  decreaseQty() {
    if (this.product!.quantity! > 1) {
      this.product!.quantity!--;
    }
  }

  increaseQty() {
    this.product!.quantity!++;
  }

}
