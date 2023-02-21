import { Component } from '@angular/core';
import { DoctorDto } from '../doctor-dto';
import { HospitalOperationService } from '../hospital-operation.service';

@Component({
  selector: 'app-view-doctors',
  templateUrl: './view-doctors.component.html',
  styleUrls: ['./view-doctors.component.css']
})
export class ViewDoctorsComponent {

  allDoctors:DoctorDto[]=[];
  constructor(private hospitalService: HospitalOperationService){

  }

  getAllDoctors(){ 
    this.hospitalService.getAllDoctor().subscribe(
     data=>{
       console.log("data :- "+data);
       
       this.allDoctors = data;
     },err=>{
       console.log("error from spring ",err);
 
     }
   );
   }
}
