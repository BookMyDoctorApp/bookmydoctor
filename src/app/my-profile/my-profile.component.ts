import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Doctor } from '../doctor';
import { DoctorDTO } from '../doctor-dto';
import { DoctorOperationService } from '../doctor-operation.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent {

  status=false;
  msg=' ';
  doctor:DoctorDTO=new DoctorDTO(0,'','','','','',0);
  d:Doctor=new Doctor(0,'','','','','','','',0);

  constructor(private doctorService:DoctorOperationService, private http:HttpClient){ 
    
  }

  getDoctor(dId: string){
    let searchId:number=parseInt(dId);
    this.doctorService.getDoctorbyId(searchId).subscribe(
      data=>{
        console.log("data :- "+data);
        
        this.doctor = data;
      },err=>{
        console.log("error from spring ",err);

      }
    );
  }

  onRegisterDoctor(){
    console.log(this.d);
    this.doctorService.addDoctor(this.d).subscribe(
      data=>{
        this.status=true;
        this.msg='Doctor Registerd!';
      },err=>{
        console.log("error from spring ",err);

      }
    );
  }
}
