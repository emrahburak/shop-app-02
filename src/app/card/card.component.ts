import { Component,Input } from '@angular/core';
import { Product } from '../model/product';
import {Social} from '../model/social';

import {Router} from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() product: Product|undefined
  @Input() post : Social | undefined


  constructor(private router:Router){

  }

  handleClick(product:Product):void {
    console.log("clicked", product)
  }
}
