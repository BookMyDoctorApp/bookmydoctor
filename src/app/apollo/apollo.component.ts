import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DoctorDto } from '../doctor-dto';
import { HospitalOperationService } from '../hospital-operation.service';

@Component({
  selector: 'app-apollo',
  templateUrl: './apollo.component.html',
  styleUrls: ['./apollo.component.css']
})
export class ApolloComponent {

  doctor:DoctorDto[]=[];
  constructor(private hospitalService: HospitalOperationService, private router:Router){

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

  moveToAFeedback(){
    this.router.navigate(['feedback']);
  }
}
