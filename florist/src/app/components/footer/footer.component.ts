import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, MatGridListModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  data: any[] = [];
  visibleCards: any[] = [];
  currentPage = 0;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getData('assets/data/reviews.json').subscribe((response: any) => {
      this.data = response;
      this.updateVisibleCards();
    });
  }

  updateVisibleCards(): void {
    const startIndex = this.currentPage * 3;
    this.visibleCards = this.data.slice(startIndex, startIndex + 3);
  }

  setPage(pageIndex: number): void {
    this.currentPage = pageIndex;
    this.updateVisibleCards();
  }
}
