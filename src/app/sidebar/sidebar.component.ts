import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  faArrowRight = faArrowRight
  faArrowLeft = faArrowLeft

  constructor(private router: Router) { }

  handleClick(): void {
    let elementsI = document.querySelectorAll('.display-i')
    let elementsN = document.querySelectorAll('.display-n')
    elementsI.forEach(function (element) {
      element.classList.remove('display-i')
      element.classList.add('display-n')
    })

    elementsN.forEach(function (element) {
      element.classList.remove('display-n')
      element.classList.add('display-i')

    })

  }

}
