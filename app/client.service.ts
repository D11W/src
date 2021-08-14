import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private baseUrl!: string; 
 // private baseUrl = "http://localhost:3000/posts";

  constructor(private http: HttpClient,private router:Router) { 
    this.baseUrl='http://gstautomationapi-env.eba-76hympvm.ap-south-1.elasticbeanstalk.com/';
  }

createClient(Client:any){
  let createUrl=this.baseUrl+'client';
  console.log(Client);
  return this.http.post(createUrl, Client); 
  //  return this.http.post<UserRegistration>(url4, userRegistration);
}
  
getAllClient():Observable<any>
{
 return this.http.get(`${this.baseUrl }`);
}

deleteClient(id:number)
{
  let deleteurl=this.baseUrl+'client/id'+id;
 // return this.http.delete(`${this.baseUrl}/${id}`);
 return this.http.delete(`${deleteurl}`);
}

getClient(id:number)
{
  let allclientUrl=this.baseUrl+'client/id'+id;
 return this.http.get(`${allclientUrl}`);
 // return this.http.get(`${this.baseUrl}/${id}`);
}

updateClient(id:number,data:any)
{
  let updateclientUrl=this.baseUrl+'client/id'+id;
 // return this.http.put(`${this.baseUrl}/${id}`,data)
 return this.http.put(`${updateclientUrl}`,data);
}
}
