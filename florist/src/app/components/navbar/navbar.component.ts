import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, MatSidenavModule, MatGridListModule, MatIconModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  isMobile: boolean = false;
  sidebarOpened: boolean = false;

  constructor(private router: Router) {
    this.checkScreenSize(window.innerWidth);
  }

  navigateToFragment(event: MouseEvent, fragment: string) {
    this.router.navigate(['/'], { fragment });
    this.sidebarOpened = false;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: { target: { innerWidth: number } }) {
    this.checkScreenSize(event.target.innerWidth);
  }

  checkScreenSize(width: number) {
    this.isMobile = width <= 768;
  }

  toggleSidebar() {
    this.sidebarOpened = !this.sidebarOpened;
  }
}
