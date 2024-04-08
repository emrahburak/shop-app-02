import { Component } from '@angular/core';
import {faMagnifyingGlass,faBagShopping} from '@fortawesome/free-solid-svg-icons';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  faMagnifyingGlass = faMagnifyingGlass
  faBagShopping = faBagShopping

  constructor(private router: Router){}

}
