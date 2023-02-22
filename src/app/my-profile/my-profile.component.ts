import { Component } from '@angular/core';
import { DoctorDTO } from '../doctor-dto';
import { DoctorOperationService } from '../doctor-operation.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent {

  doctor:DoctorDTO=new DoctorDTO(0,'','','','','',0);

  constructor(private doctorService:DoctorOperationService){ 
    
  }

  getDoctor(abc: string){
    let searchId:number=parseInt(abc);
    this.doctorService.getDoctorbyId(searchId).subscribe(
      data=>{
        console.log("data :- "+data);
        
        this.doctor = data;
      },err=>{
        console.log("error from spring ",err);

      }
    );
  }
}
