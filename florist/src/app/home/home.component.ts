import { Component, HostListener, OnInit, inject } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ContactComponent } from '../components/contact/contact.component';
import { AboutComponent } from '../components/about/about.component';
import { NavbarComponent } from "../components/navbar/navbar.component";
import { PortfolioComponent } from '../components/portfolio/portfolio.component';
import { HeroComponent } from '../components/hero/hero.component';
import { OfferComponent } from '../components/offer/offer.component';
import { FooterComponent } from '../components/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ContactComponent, AboutComponent, NavbarComponent, PortfolioComponent, HeroComponent, OfferComponent, FooterComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  activeRoute: ActivatedRoute = inject(ActivatedRoute);
  router: Router = inject(Router);
  isScrolled: boolean | undefined;

  ngOnInit() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        const fragment = this.activeRoute.snapshot.fragment;
        if (fragment) {
          this.JumpToSection(fragment);
        }
      });
  }

  JumpToSection(section: string) {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      this.router.navigate([]);
    }
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    const scrollOffset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.isScrolled = scrollOffset > 300; // Show button after 300px scroll
  }

  scrollToTop(): void {
    document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' });
  }
}
