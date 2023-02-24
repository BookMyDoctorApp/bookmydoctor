import { Component } from '@angular/core';
import { DoctorDto } from '../doctor-dto';
import { HospitalOperationService } from '../hospital-operation.service';

@Component({
  selector: 'app-apollo',
  templateUrl: './apollo.component.html',
  styleUrls: ['./apollo.component.css']
})
export class ApolloComponent {

  doctor:DoctorDto[]=[];
  constructor(private hospitalService: HospitalOperationService){

  }

  getDoctorbyHospital(searchId:string){
    let hospitalId:number=parseInt(searchId);
    this.hospitalService.getAllDoctorsbyHospital(hospitalId).subscribe(
      data=>{
        console.log("data :- "+data);
        
        this.doctor = data;
      },err=>{
        console.log("error from spring ",err);

      }
    );
  }
}
