import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Hospital } from '../hospital';
import { HospitalOperationsService } from '../hospital-operations.service';
@Component({
  selector: 'app-hospital-details',
  templateUrl: './hospital-details.component.html',
  styleUrls: ['./hospital-details.component.css']
})
export class HospitalDetailsComponent {
  _hospitalService:HospitalOperationsService;
  router:Router;
  activeRoute:ActivatedRoute;
  h:Hospital=new Hospital(0,'','','','','',0,0,'');

  constructor(hospitalService:HospitalOperationsService,router:Router,activeRoute:ActivatedRoute){
    this._hospitalService=hospitalService;
    this.router=router;
    this.activeRoute=activeRoute;

    let searchHospitalid=this.activeRoute.snapshot.params['hid'];
    console.log(searchHospitalid);
    this.h=this._hospitalService.getHospitalByNumber(parseInt(searchHospitalid));
    console.log(this.h)
  }
}
