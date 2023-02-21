import { Component } from '@angular/core';
import { HospitalDTO } from '../hospital-dto';
import { HospitalOperationService } from '../hospital-operation.service';

@Component({
  selector: 'app-view-hospital',
  templateUrl: './view-hospital.component.html',
  styleUrls: ['./view-hospital.component.css']
})
export class ViewHospitalComponent {

  //hospital:HospitalDTO=new HospitalDTO(0,'','','','',0);
  allHospital:HospitalDTO[]=[];
  constructor(private hospitalService: HospitalOperationService){

  }
  getHospital(abc: string){
    let searchId:number=parseInt(abc);
    this.hospitalService.getHospitalbyId(searchId).subscribe(
      data=>{
        console.log("data :- "+data);
        
        this.allHospital = data;
      },err=>{
        console.log("error from spring ",err);

      }
    );
  }

  
  getAllHospitals(){ 
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
    this.hospitalService.getHospitalByState(stateName).subscribe(
      data=>{
        console.log("data :- "+data);
        
        this.allHospital = data;
      },err=>{
        console.log("error from spring ",err);
  
      } 
    );
  }

}
