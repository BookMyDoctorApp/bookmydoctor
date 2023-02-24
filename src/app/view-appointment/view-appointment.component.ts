import { Component } from '@angular/core';
import { AppointmentDTO } from '../appointment-dto';
import { HospitalOperationService } from '../hospital-operation.service';

@Component({
  selector: 'app-view-appointment',
  templateUrl: './view-appointment.component.html',
  styleUrls: ['./view-appointment.component.css']
})
export class ViewAppointmentComponent {

  allAppointment:AppointmentDTO[]=[];
 constructor(private hospitalService:HospitalOperationService){

  }

  getAllAppointment(){ 
    this.hospitalService.getAllAppointments().subscribe(
     data=>{
       console.log("data :- "+data);
       
       this.allAppointment = data;
     },err=>{
       console.log("error from spring ",err);
 
     }
   );
   }

}
