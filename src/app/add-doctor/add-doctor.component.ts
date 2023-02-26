import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { DoctorDto } from '../doctor-dto';
import { HospitalOperationService } from '../hospital-operation.service';

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.css']
})
export class AddDoctorComponent {
  status=false;
  msg=' ';
  d:DoctorDto=new DoctorDto(0,'','','','','','','',0);
  

  constructor(private hospitalService:HospitalOperationService, private http:HttpClient){
    
  }
  
  onRegisterDoctor(){
    console.log(this.d);
    this.hospitalService.addDoctor().subscribe(
      data=>{
        this.status=true;
        this.msg='Doctor Registerd!';
      },err=>{
        console.log("error from spring ",err);

      }
    );
  }

}
