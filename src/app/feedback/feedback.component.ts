import { Component } from '@angular/core';
import { DoctorOperationService } from '../doctor-operation.service';
import { FeedbackDTO } from '../feedback-dto';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent {

  allFeedback:FeedbackDTO[]=[];
  constructor(private doctorService: DoctorOperationService){

  }

  getAllFeedback(searchName:string){
    this.doctorService.getFeedbackbyDoctor(searchName).subscribe(
      data=>{
        console.log("data :- "+data);
        
        this.allFeedback = data;
      },err=>{
        console.log("error from spring ",err);

      }
    );
  }
}
