import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { UserRegistration } from './users/register/UserRegistration';
import { LoginUser } from './users/login/LoginUser';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  isAuthenticated:boolean=false;
  username:any='';
  Role:any=localStorage.getItem('role');
  User:any='';
  token:any=''; 

  private usersUrl!: string; 

  constructor(private http: HttpClient,private router:Router) { 
    this.usersUrl='http://gstautomationapi-env.eba-76hympvm.ap-south-1.elasticbeanstalk.com/';
  }


  createUser(userRegistration: UserRegistration) {
    let url4 = this.usersUrl + 'registration';
    console.log(userRegistration);    
    return this.http.post<UserRegistration>(url4, userRegistration);
  } 

 authenticate(loginuser: LoginUser):Observable<any>{
    let url1 = this.usersUrl + 'authenticate';
    this.username=loginuser.userName;
    localStorage.setItem("user",this.username);
    console.log("This is user login:    "+JSON.stringify(LoginUser));
    return this.http.post(url1,loginuser);
  }

  getNewPassword(email:string){
    let pwd=this.usersUrl + "login/OTP?email="+email;
    console.log("successful"+email);
    return this.http.get(pwd);
  }

 auth(){
  this.token=localStorage.getItem('token');
  this.Role=localStorage.getItem('role');
  console.log("Role in serive :-"+this.Role);
 }

  logout(){
    this.Role=localStorage.removeItem('role');
    this.token=localStorage.removeItem('token')
    console.log("After Logout"+this.Role);
    localStorage.removeItem('user')
  }
  
  
   
}
