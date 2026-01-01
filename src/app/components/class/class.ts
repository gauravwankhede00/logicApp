import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-class',
  imports: [CommonModule,FormsModule],
  templateUrl: './class.html',
  styleUrl: './class.css',
})
export class Class {
className : string = 'test';

isTrue : boolean = true;

}
