import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Client } from './Client';
import { ClientService } from 'src/app/client.service';


@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  constructor(private clientService:ClientService) { }

  address={
    line1:'',
    line2:'',
    landmark:'',
    city:'',
    pincode:0,
    state:'',
  }
  
  client : Client={
    address:this.address,
    companyName:'',
    email: '',
    contact:'',
    gst:'',
    pan:'',
   website:''
  }

  submitUser(addclient:any){
    this.address={
      line1:addclient.line1,
      line2:addclient.line2,
      landmark:addclient.landmark,
      city:addclient.city,
      pincode:addclient.pincode,
      state:addclient.state
    }
     this.client = {
      address:this.address,
      companyName:addclient.companyName,
      email: addclient.email,
      contact:addclient.contactNumber,
      gst:addclient.gstNumber,
      pan:addclient.panNumber,
      website:addclient.website
      
    };
    this.clientService.createClient(this.client).subscribe((res)=>{
      console.log(res);
    });
   
  }
  ngOnInit(): void {
    
  }


 

}
