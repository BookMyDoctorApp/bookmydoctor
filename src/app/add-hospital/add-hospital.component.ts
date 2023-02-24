
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Hospital } from '../hospital';
import { HospitalDTO } from '../hospital-dto';
import { HospitalOperationService } from '../hospital-operation.service';
@Component({
  selector: 'app-add-hospital',
  templateUrl: './add-hospital.component.html',
  styleUrls: ['./add-hospital.component.css']
})
export class AddHospitalComponent {
 
  status=false;
  msg=' ';
 
  //allHospital:HospitalDTO[]=[];
  h:Hospital=new Hospital(0,'','','','',0,'');
 // hospitalData: any;
  
  constructor(private hospitalService:HospitalOperationService, private http:HttpClient){
    
  }

  onRegisterHospital(){
    console.log(this.h);
    this.hospitalService.addHospital(this.h).subscribe(
      data=>{
        this.status=true;
        this.msg='Doctor Registerd!';
      },err=>{
        console.log("error from spring ",err);

      }
    );


  }
/*
  addHospital(data:any){
    console.warn(data);
    this.hospitalData.hospitals().subscribe((result: any)=>{
      this.hospitals=data;
      console.warn(result);
      
    });
      
    }
  /*readHospital(hospitalId:string,hospitalName:string,city:string,
    state:string,address:string,hospitalRating:string, imageName:string){

      console.log(hospitalId+" "+hospitalName+" "+city+" "+state+" "+address+" "+hospitalRating+" "+imageName);
      let hospitalFromUser:Hospital=new Hospital(parseInt(hospitalId),hospitalName,city,state, address,parseInt(hospitalRating),imageName);
      this.hospitalService.addHospital(hospitalFromUser);
      //_hospitalService.addHospital(hospitalFromUser);
    }
*/
   
      
    }
  
  

