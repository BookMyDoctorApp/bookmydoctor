import { Component } from '@angular/core';
import { AppointmentDTO } from '../appointment-dto';
import { DoctorOperationService } from '../doctor-operation.service';

@Component({
  selector: 'app-my-appointment',
  templateUrl: './my-appointment.component.html',
  styleUrls: ['./my-appointment.component.css']
})
export class MyAppointmentComponent {

  allAppointments:AppointmentDTO[]=[];
  constructor(private doctorService: DoctorOperationService){

  }

  getAllAppointments(){ 
    this.doctorService.getAllAppointment().subscribe(
     data=>{
       console.log("data :- "+data);
       
       this.allAppointments = data;
     },err=>{
       console.log("error from spring ",err);
 
     }
   );
   }
}
