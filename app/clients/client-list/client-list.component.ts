import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from 'src/app/client.service';

import {Client} from '../client/Client';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  constructor(private http:ClientService,private router:Router) { }

  clients: any=[];
  

  ngOnInit(): void {
    this.http.getAllClient().subscribe((result)=>{
      console.log(result);
      this.clients=result;
    });
  }

  delete(item:number)
  {
    console.log(this.clients);
    this.clients.splice(item-1,1);
  this.http.deleteClient(item).subscribe((result)=>{
    console.log(result);
  })
  }

}
