import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FeedbackDTO } from '../feedback-dto';
import { HospitalOperationService } from '../hospital-operation.service';

@Component({
  selector: 'app-view-feedbacks',
  templateUrl: './view-feedbacks.component.html',
  styleUrls: ['./view-feedbacks.component.css']
})
export class ViewFeedbacksComponent {

  allFeedback:FeedbackDTO[]=[];

  constructor(private hospitalService: HospitalOperationService, private router:Router){

  }

  getFeedbacksByDoctorsName(searchName:string){
    this.hospitalService.getFeedbackByDoctorName(searchName).subscribe(
      data=>{
        console.log("data :- "+data);
        
        this.allFeedback = data;
      },err=>{
        console.log("error from spring ",err);

      }
    );
  }
}
