import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Cart } from '../model/cart';
import { Product } from '../model/product';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {

  cartItems: Cart | undefined
  products: Product[] | undefined
  total = 0

  constructor(private cartService: CartService) { }


  ngOnInit(): void {
    this.cartService.getCartItems().subscribe(cartItems => {
      this.cartItems = cartItems;
      cartItems.products.forEach(product => {
        this.total += product.price
      })
    }
    )
    console.log("cart items ", this.cartItems, this.total)

  }

}
