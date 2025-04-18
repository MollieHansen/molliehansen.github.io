import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})

export class NavbarComponent {
  isMobileMenuOpen = false;
  isMenuVisible = false;

  navLinks = [
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/about', label: 'Statement + Bio' },
    { path: '/resume', label: 'Resume' },
    { path: '/contact', label: 'Contact' },
  ];

  toggleMobileMenu() {
    if (this.isMobileMenuOpen) {
      this.closeMobileMenu();
    } else {
      this.openMobileMenu();
    }
  }

  openMobileMenu() {
    this.isMenuVisible = true;
    setTimeout(() => {
      this.isMobileMenuOpen = true;
    }, 10); // Delay to allow CSS transitions
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
    setTimeout(() => {
      this.isMenuVisible = false;
    }, 300); // Wait for transition to complete before removing from DOM
  }

  closeMobileMenuNavigation() {
    this.isMobileMenuOpen = false;
    setTimeout(() => {
      this.isMenuVisible = false;
    }, 10);
  }

  @HostListener('document:keydown.escape', ['$event'])
  onEscape(event: KeyboardEvent) {
    if (this.isMobileMenuOpen) {
      this.closeMobileMenu();
    }
  }
}
