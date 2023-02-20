import { Component } from '@angular/core';
import { Hospital } from '../hospital';
import { HospitalOperationsService } from '../hospital-operations.service';

@Component({
  selector: 'app-hospital-admin',
  templateUrl: './hospital-admin.component.html',
  styleUrls: ['./hospital-admin.component.css']
})

export class HospitalAdminComponent {
  _hospitalService:HospitalOperationsService;

  constructor(hospitalService:HospitalOperationsService){
    this._hospitalService=hospitalService;
  }

  searchHospital(hospitalId:string,hospitalName:string,hospitalCity:string,
    hospitalState:string,speciality:string,imageName:string,fees:string,discount:string,about:string){
      
      console.log(hospitalId+" "+hospitalName+" "+hospitalCity+" "+hospitalState+" "+
      speciality+" "+imageName+" "+fees+" "+discount+" "+about);
      
      let hospitalFromUser:Hospital=new Hospital(parseInt(hospitalId),hospitalName,hospitalCity,hospitalState,speciality,imageName,parseInt(fees),parseInt(discount),about);
      this._hospitalService.addHospital(hospitalFromUser);
    }
}
