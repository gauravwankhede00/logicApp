import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  imports: [CommonModule],
  templateUrl: './signal.html',
  styleUrl: './signal.css',
})
export class Signal {

  city = signal<string[]>(['a','b','c']);

  fruits : string[]= ['apple', 'banana'];

  updateCity(){
    setTimeout(() => {
      this.fruits.unshift('orange');
    }, 2200);
    //this.city.set(['a','b','c','d']);
    //this.fruits.unshift('orange');
  }
}
