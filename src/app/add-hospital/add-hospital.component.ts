import { Component } from '@angular/core';
import { Hospital } from '../hospital';
import { HospitalOperationService } from '../hospital-operation.service';
@Component({
  selector: 'app-add-hospital',
  templateUrl: './add-hospital.component.html',
  styleUrls: ['./add-hospital.component.css']
})
export class AddHospitalComponent {

  
  }
/*
  searchHospital(hospitalId:string,hospitalName:string,hospitalCity:string,
    hospitalState:string,speciality:string,hospitalAddress:string,hospitalRating:string,imageName:string){
      
      console.log(hospitalId+" "+hospitalName+" "+hospitalCity+" "+hospitalState);
      
      let hospitalFromUser:Hospital=new Hospital(parseInt(hospitalId),hospitalName,hospitalCity,hospitalState, speciality,hospitalAddress,parseInt(hospitalRating),imag);
      this._hospitalService.addHospital(hospitalFromUser);
    }
*/

