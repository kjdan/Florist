import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [MatGridListModule, MatCardModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  breakpoint: number | undefined;

  constructor() { }

  ngOnInit() {
    this.setResponsiveLayout(window.innerWidth);
  }

  onResize(event: UIEvent) {
    const target = event.target as Window;
    this.setResponsiveLayout(target.innerWidth);
  }

  private setResponsiveLayout(width: number) {
    this.breakpoint = width <= 768 ? 1 : 3; // Set to 1 column for small screens, 3 for larger
  }
}
