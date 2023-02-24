import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataOperationService } from '../data-operation.service';
import { Patient } from '../patient';
import { PatientOperationService } from '../patient-operation.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  loginUsername:string='';
  userRole:string='';
  loginStatus:boolean=false;

  _dataService:DataOperationService;
  // patientService:PatientOperationService;

  p: Patient = new Patient(0,'','','',0,'','','','');

  status = false;
  message = '';
  

  constructor(dataService:DataOperationService,private router: Router)
  {
    this._dataService = dataService;
    this.loginStatus = false;
    

    
  }


//   onSubmit() {
//     // console.log(this.f);
    
//     this.patientService.register(this.p).subscribe(
      
    
//       data=>{
//         this.status=true;
//         this.message="Patient Registered";
//         console.log(data);
      
//       },
//       err=>{
// console.log(err);

//       }

//     )
    
  
//   }

   

  moveToReg(){
    this.router.navigate(['register1']);
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



