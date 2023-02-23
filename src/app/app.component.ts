import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataOperationService } from './data-operation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LoginPage';


  loginUsername:string='';
  userRole:string='';
  loginStatus:boolean=false;

  _dataService:DataOperationService;

  

  constructor(dataService:DataOperationService,private router: Router)
  {
    this._dataService = dataService;
    this.loginStatus = false;

    
  }


  Profile(){
    this.router.navigate(['/userProfile']);
  }

 


  verifyUser(username:string,password:string){
    console.log("Inside Component TS :"+username+" "+password);
    this.loginStatus = this._dataService.doLogin(username,password);

    if(this.loginStatus == true){
      //becoz local storage may give u null
      this.userRole = localStorage.getItem('role') || '';
      this.loginUsername=localStorage.getItem('username') || '';

      console.log("username "+this.loginUsername)
      console.log("user role "+this.userRole);
    }
  }

  doLogout()
  {
    this.loginUsername = '';
    this.userRole = '';
    this.loginStatus= false;
    this._dataService.doUserLogout();
  }

}
