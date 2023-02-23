import { Component } from '@angular/core';
import { DoctorOperationService } from '../doctor-operation.service';
import { PatientDTO } from '../patient-dto';

@Component({
  selector: 'app-view-patient',
  templateUrl: './view-patient.component.html',
  styleUrls: ['./view-patient.component.css']
})
export class ViewPatientComponent {

  allPatients:PatientDTO[]=[];
  constructor(private hospitalService:DoctorOperationService){
 
   }
 
   getAllPatients(){ 
     this.hospitalService.getAllPatient().subscribe(
      data=>{
        console.log("data :- "+data);
        
        this.allPatients = data;
      },err=>{
        console.log("error from spring ",err);
  
      }
    );
    }

}

