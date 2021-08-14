import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { UserService } from 'src/app/user.service';

import { LoginUser } from '../login/LoginUser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public router:Router,private userService:UserService) { }

  loginUser: LoginUser={
    userName: '',
    password:''
  }
  
  token:any={};
  Authorization:any;
  Role:any;
    authenticate(user:any){
      this.loginUser={
        userName: user.userName,
        password: user.password
      } 
      console.log(this.loginUser.userName);
      console.log(this.loginUser.password);
       this.userService.authenticate(this.loginUser).subscribe((result)=>{       
        console.log("This is Result: "+JSON.stringify(result));
        this.token=result;
        console.log(this.token.jwtToken);
        this.Role=result.role;
        console.log("Role :- "+this.Role);
        localStorage.setItem('role',this.Role);
        localStorage.setItem('token', this.token.jwtToken);
      
          if (this.token.jwtToken) {
            this.userService.auth();
            this.router.navigate(["/home"]);
  
      // this.router.navigate(["/register"]);
        }
      });
  
  
    }
    ngOnInit(): void {
     
    }
  
  navigate(){
    this.router.navigate(["/register"]);
  }
  
  forgetPassword()
  {
    this.router.navigate(["/forgot"]);
  }
  
  }
  