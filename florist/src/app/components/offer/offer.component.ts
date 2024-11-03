import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { DataService } from '../../services/data.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-offer',
  standalone: true,
  imports: [MatGridListModule, MatCardModule, CommonModule, HttpClientModule],
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent implements OnInit {
  cards: any[] = [];
  breakpoint: number | undefined;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.setResponsiveLayout(window.innerWidth);
    this.dataService.getData('assets/data/data.json').subscribe(data => {
      this.cards = data;
    });
  }

  onResize(event: UIEvent) {
    const target = event.target as Window;
    this.setResponsiveLayout(target.innerWidth);
  }

  private setResponsiveLayout(width: number) {
    this.breakpoint = width <= 1200 ? 1 : 4;
  }
}
