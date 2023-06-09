import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  isOpen = false;
  isOpenBurguer = false;

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  toggleBurguer() {
    this.isOpenBurguer = !this.isOpenBurguer
  }

}
