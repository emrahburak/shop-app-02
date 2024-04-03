import { Component,Input } from '@angular/core';
import { Product } from '../model/product';
import {Social} from '../model/social';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() product: Product|undefined
  @Input() post : Social | undefined

}
