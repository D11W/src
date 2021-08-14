import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from 'src/app/client.service';
import { Client} from '../client/Client';

@Component({
  selector: 'app-update-client',
  templateUrl: './update-client.component.html',
  styleUrls: ['./update-client.component.css']
})
export class UpdateClientComponent implements OnInit {

  constructor(private clientService:ClientService,private router:ActivatedRoute) { }
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


  ngOnInit(): void {
    console.warn(this.router.snapshot.params.id);
    this.getData();
  }
data:any={};
  getData(){
    this.clientService.getClient(this.router.snapshot.params.id).subscribe((result)=>{
      console.log("getting result"+JSON.stringify(result)); 
this.data=result;
console.log(this.data);
console.log(this.data.address);
this.address={
  line1:this.data.address.line1,
    line2:this.data.address.line2,
    landmark:this.data.address.landmark,
    city:this.data.address.city,
    pincode:this.data.address.pincode,
    state:this.data.address.state,
}
this.client={
  address:this.address,
  companyName:this.data.companyName,
  email: this.data.email,
  contact:this.data.contact,
  gst:this.data.gst,
  pan:this.data.pan,
 website:this.data.website
}


    })
  }
  
  update(val:any)
  {
    this.address={
      line1:val.line1,
      line2:val.line2,
      landmark:val.landmark,
      city:val.city,
      pincode:val.pincode,
      state:val.state,
    }
    
    this.client={
      address:this.address,
      companyName:val.companyName,
      email: val.email,
      contact:val.contact,
      gst:val.gst,
      pan:val.pan,
     website:val.website
    }
   console.log(val);
   this.clientService.updateClient(this.router.snapshot.params.id,this.client).subscribe((res)=>
   {
     console.log("result",res)
   })
  }
  
  

 
}
