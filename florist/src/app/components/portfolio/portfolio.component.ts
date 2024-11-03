import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [MatGridListModule, MatCardModule, CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  data: any[] = [];
  visibleCards: any[] = [];
  currentPage = 0;
  screenWidth: number = window.innerWidth;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getData('assets/data/reviews.json').subscribe((response: any) => {
      this.data = response;
      this.updateVisibleCards();
    });
  }

  updateVisibleCards(): void {
    const startIndex = this.currentPage;
    this.visibleCards = this.data.slice(startIndex, startIndex + 1);
  }

  setPage(pageIndex: number): void {
    const totalPages = this.getTotalPages();
    this.currentPage = Math.max(0, Math.min(pageIndex, totalPages - 1));
    this.updateVisibleCards();
  }

  getTotalPages(): number {
    return this.data.length;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = window.innerWidth;
  }
}
