import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuildingComponent } from './building/building.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, BuildingComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'apartment-management';
}
