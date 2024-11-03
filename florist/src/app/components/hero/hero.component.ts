import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [MatGridListModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

}
