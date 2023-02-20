import { Component, OnInit } from '@angular/core';
import { Hospital } from '../hospital';
import { HospitalOperationsService } from '../hospital-operations.service';

@Component({
  selector: 'app-tdfhospital-page',
  templateUrl: './tdfhospital-page.component.html',
  styleUrls: ['./tdfhospital-page.component.css']
})
export class TDFHospitalPageComponent{

  _hospitalService:HospitalOperationsService;
  h:Hospital=new Hospital(0,'','','','','',0,0,'');

  constructor(hospitalService:HospitalOperationsService){
    this._hospitalService=hospitalService;
  }

  doFormSubmit(){
    console.log("Form SUBMIT button clicked")
    console.log(this.h);
  }

}
