import { Component } from '@angular/core';
import { HospitalDto } from '../hospital-dto';
import { HospitalOperationsService } from '../hospital-operations.service';

@Component({
  selector: 'app-health-awareness',
  templateUrl: './health-awareness.component.html',
  styleUrls: ['./health-awareness.component.css']
})
export class HealthAwarenessComponent {

  allHospitals:HospitalDto[]=[];
  constructor(private hospitalServive:HospitalOperationsService){

   


  }//end of constructor

getHospitals(cityName:string){
  this.hospitalServive.getHospitalsDetailsbyCity(cityName).subscribe(
    data=>{
      console.log("data :- "+data);
      
      this.allHospitals = data;
    },err=>{
      console.log("error from spring ",err);

    } 
  );
}
}//end of class
