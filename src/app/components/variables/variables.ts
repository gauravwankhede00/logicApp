import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-variables',
  imports: [CommonModule, FormsModule],
  templateUrl: './variables.html',
  styleUrl: './variables.css',
})
export class Variables {
  firstName: string = "Dhruvi";
  middleName: string = "Gaurav";
  lastName: string = "Wankhede";
  date : Date;

  price! : number;
  quantity! : number;
  discount! : number; 
  finalPrice? : number;
  todaysDate : Date = new Date();
  constructor(){
    this.date= new Date(1990,9,2);
    const year = this.todaysDate.getFullYear() - this.date.getFullYear();
    const month = this.todaysDate.getMonth() - this.date.getMonth();
    const day = this.todaysDate.getDate() - this.date.getDate();
    console.log('Age :'+year + ' '+ month+ ' '+ day);
  }
  blur(){
    window.alert(this.date)
  }
  calculateFinalPrice(){
    debugger;
    const total = this.price * this.quantity;
    this.finalPrice = total - this.discount;
  }
}
