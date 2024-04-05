import { Component } from '@angular/core';
import {faMagnifyingGlass,faBagShopping} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  faMagnifyingGlass = faMagnifyingGlass
  faBagShopping = faBagShopping

}
