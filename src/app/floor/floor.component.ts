import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Flat } from '../flat/flat.model';
import { FlatComponent } from '../flat/flat.component';

@Component({
  selector: 'app-floor',
  standalone: true,
  imports: [CommonModule, FlatComponent],
  templateUrl: './floor.component.html',
  styleUrls: ['./floor.component.css']
})
export class FloorComponent {
  @Input() floorNumber!: number; // Use the non-null assertion operator

  flats: Flat[] = [];

  constructor() {
    for (let i = 1; i <= 10; i++) {
      this.flats.push(new Flat(i));
    }
  }
}
