import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import {UserRegistration} from './UserRegistration';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private userService:UserService) {
  }

  address={
   line1:'',
   line2:'',
   landmark:'',
   city:'',
   pincode:0,
   state:'',
 }
 user:string='';
 userRegistration : UserRegistration={
   address:this.address,
   companyName:'',
   firstName: '',
   lastName:'',
   email: '',
   contactNumber:'',
   gstNumber:'',
   panNumber:'',
   userName:'',
   password:'',
   confirmPassword: '',

 }



 submitUser(submitForm:any){
   this.address={
     line1:submitForm.line1,
     line2:submitForm.line2,
     landmark:submitForm.landmark,
     city:submitForm.city,
     pincode:submitForm.pincode,
     state:submitForm.state
   }
   this.userRegistration = {
    /* bankname:submitForm.bankname,
     accountNumber:submitForm.accountNumber,
     IFSCCode:submitForm.IFSCCode,
     branch:submitForm.branch,*/
     address:this.address,
     companyName:submitForm.companyName,
     firstName:submitForm.firstName ,
     lastName:submitForm.lastName,
     email: submitForm.email,
     contactNumber:submitForm.contactNumber,
     gstNumber:submitForm.gstNumber,
     panNumber:submitForm.panNumber,
     userName:submitForm.userName,
     password:submitForm.password,
     confirmPassword:submitForm.confirmPassword ,
 
   };
   
   
   this.userService.createUser(this.userRegistration).subscribe((res)=>{
     console.log(res);
   });
 } 

 ngOnInit():void{

 }

}

