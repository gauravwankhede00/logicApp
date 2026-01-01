import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, signal} from '@angular/core';


@Component({
  selector: 'app-get-api',
  imports: [CommonModule],
  templateUrl: './get-api.html',
  styleUrl: './get-api.css',
})
export class GetApi {
  photoData = signal<any[]>([]);
  vendorData = signal<any[]>([]);
  clientData = signal<any[]>([]);
  constructor(private httpClient: HttpClient) { 
    this.getData();
    this.getVendorData();
    this.getClient();
  }

  getData(){
    this.httpClient.get('https://jsonplaceholder.typicode.com/photos').subscribe((data : any)=>{
   data = data.slice(0, 10  );
      this.photoData.set(data);
    });
  }

  getVendorData(){
    this.httpClient.get('https://api.freeprojectapi.com/api/BusBooking/GetBusVendors').subscribe((vendor : any)=>{
      this.vendorData.set(vendor);
    });
  }

  getClient(){
    this.httpClient.get('https://api.freeprojectapi.com/api/SmartParking/GetAllClients').subscribe({
      next :(res:any)=>{
        this.clientData.set(res['data']);
      }
    });
  }
}
