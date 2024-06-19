import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FloorComponent } from '../floor/floor.component';
import { EntranceComponent } from '../entrance/entrance.component';

@Component({
  selector: 'app-building',
  standalone: true,
  imports: [CommonModule, FloorComponent, EntranceComponent],
  templateUrl: './building.component.html',
  styleUrls: ['./building.component.css']
})
export class BuildingComponent {
  floors = [1, 2, 3, 4, 5];
}
