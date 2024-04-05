import { Component, HostListener,ElementRef } from '@angular/core';
import { faGear, faHeadset } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  faGear = faGear
  faHeadset = faHeadset

  public showButton: boolean = false

  constructor(private elementRef:ElementRef){}

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    const footer = this.elementRef.nativeElement.querySelector('footer');
    const footerTop = footer.getBoundingClientRect().top;
    const button = document.getElementById('stikySettingbtn');

    if (window.pageYOffset + window.innerHeight > footerTop) {
      this.showButton = false;
    } else {
      this.showButton = true;
    }
  }



}
