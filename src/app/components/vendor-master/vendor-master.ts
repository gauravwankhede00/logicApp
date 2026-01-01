import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-vendor-master',
  imports: [CommonModule],
  templateUrl: './vendor-master.html',
  styleUrl: './vendor-master.css',
})
export class VendorMaster implements OnInit {
  httpClient = inject(HttpClient);

  clients = signal<any[]>([]);
  ngOnInit(): void {
    this.getClient();
  }

  getClient(){
    this.httpClient.get("https://api.freeprojectapi.com/api/BusBooking/GetBusVendors").subscribe({
      next :(res:any)=>{
        this.clients.set(res);
      },error:(er)=>{
        alert(er);
      }
    })
  }
}
