import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Flat } from './flat.model';

@Component({
  selector: 'app-flat',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './flat.component.html',
  styleUrls: ['./flat.component.css']
})
export class FlatComponent {
  @Input() flat!: Flat;
}