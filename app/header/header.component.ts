import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  Token=localStorage.getItem('token');
  isAuthenticated:boolean=true;
  User:any='';

  constructor(public router:Router,public http:UserService) { }
  
  ngOnInit(): void {

}

  logout()
  {
    this.http.logout();
  }

 
  
}
    
    


   
    

  
  


