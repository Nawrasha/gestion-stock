import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isMenuOpen = false;  // Variable pour gérer l'ouverture du menu mobile

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen; // Change l'état du menu (ouvert/fermé)
  }
}
