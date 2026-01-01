import { CommonModule, NgFor } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-for',
  imports: [FormsModule, CommonModule],
  templateUrl: './for.html',
  styleUrl: './for.css',
})
export class For {
  cities= signal(['Nagpur', 'Pune', 'Mumbai']);
}
