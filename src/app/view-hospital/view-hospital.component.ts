import { Component } from '@angular/core';
import { Hospital } from '../hospital';
import { HospitalDTO } from '../hospital-dto';
import { HospitalOperationService } from '../hospital-operation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-hospital',
  templateUrl: './view-hospital.component.html',
  styleUrls: ['./view-hospital.component.css']
})
export class ViewHospitalComponent {

  hospital:Hospital=new Hospital(0,'','','','',0,'');

  allHospital:HospitalDTO[]=[];
  constructor(private hospitalService: HospitalOperationService, private router: Router){

  }

  
  getAllHospitals(){ 
    this.allHospital=[];
   this.hospitalService.getAllHospital().subscribe(
    data=>{
      console.log("data :- "+data);
      
      this.allHospital = data;
    },err=>{
      console.log("error from spring ",err);

    }
  );
  }
  getHospitalsByCity(cityName:string){
    this.allHospital=[];

    this.hospitalService.getHospitalByCity(cityName).subscribe(
      data=>{
        console.log("data :- "+data);
        
        this.allHospital = data;
      },err=>{
        console.log("error from spring ",err);
  
      } 
    );
  }

  getHospitalsByState(stateName:string){
    this.allHospital=[];
    this.hospitalService.getHospitalByState(stateName).subscribe(
      data=>{
        console.log("data :- "+data);
        
        this.allHospital = data;
      },err=>{
        console.log("error from spring ",err);
  
      } 
    );
  }

  getHospitalsById(hId: string){
    //this.allHospital=[];
    let hospitalId:number=parseInt(hId);
    this.hospitalService.getHospitalbyId(hospitalId).subscribe(
      data=>{
        console.log("data :- "+data);
        
        this.hospital = data;
      },err=>{
        console.log("error from spring ",err);

      }
    );
  }
  
  //localStorage.setItem("username",ipUsername);
 /* viewHospital(hospitalId:number, hospitalName:string, hospitalRating:number, address:string ){
    localStorage.removeItem("hospitalName")
    
    localStorage.setItem("hospitalName",hospitalName);

  }*/

  moveToApollo(){
    this.router.navigate(['search']);
  }

}//end of class
