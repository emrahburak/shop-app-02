import { Component,Input } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() product: Product|undefined

}
