import { Component } from '@angular/core';
import { Hospital } from '../hospital';
import { HospitalOperationsService } from '../hospital-operations.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent {
  
  _hospitalService:HospitalOperationsService;

  constructor(hospitalService:HospitalOperationsService){
    this._hospitalService=hospitalService;
  }

  allHospital:Array<Hospital>=[];
  
  feesHighCss:string="color:red";
  feesLowCss:string="color:green";
  feesNormalCss:string="color:black";

  goForAppointment(hospital:string){
    let hospitalId = parseInt(hospital);
    console.log("Appointment for "+hospitalId+" added");
  }

  getFilterData(filterValue:string){
    console.log("Filter Value "+filterValue);

    this.allHospital=this._hospitalService.getHospitalsBySpeciality(filterValue);
  }

  getFilterData1(filterValue:string){
    console.log("Filter Value "+filterValue);

    this.allHospital=this._hospitalService.getHospitalsByState(filterValue);
  }

  getFilterData2(filterValue:string){
    console.log("Filter Value "+filterValue);

    this.allHospital=this._hospitalService.getHospitalsByCity(filterValue);
  }
}
