import { Component } from '@angular/core';
import { Patient } from '../patient';
import { PatientOperationService } from '../patient-operation.service';
// import { Router } from '@angular/router';
import { Router } from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  status=false;
  message='';
    _patientService:PatientOperationService;
  
    allPatients:Patient[]=[];
  
    p:Patient = new Patient(0,'','','',0,'','','','');
    constructor(patientService:PatientOperationService, private router:Router)
    {
      this._patientService = patientService;
      // this.allPatients=this.__patientService.getPatientArr();
    }



    onSubmit() {
      // console.log(this.f);
      
      this._patientService.registerPatient(this.p).subscribe(
        
      
        data=>{
          this.status=true;
          this.message="Patient registered";
          console.log(data);
        
        },
        err=>{
  console.log(err);
  
        }
  
      )
      
    
    }
  
   moveToLogin(){
    this.router.navigate(['login1'])
   }


    }
  
  
  
    // readPatient(patientId:string,patientName:string,patientCity:string,patientAge:string,patientGender:string,patientDisease:string,patientPhoneNumber:string,patientBloodGroup:string)
    // {
    //     console.log(patientId+" "+patientName+" "+patientCity+" "+patientAge+"  "+patientGender+" "+patientDisease+" "+patientPhoneNumber+" "+patientBloodGroup);
    //     let patientFromUser:Patient = new Patient(parseInt(patientId),patientName,patientCity,parseInt(patientAge),patientGender,patientDisease,patientPhoneNumber,patientBloodGroup);
    //     this.__patientService.submit(patientFromUser);
    // }
  
  
  
