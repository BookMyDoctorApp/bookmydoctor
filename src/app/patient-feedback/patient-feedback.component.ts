import { Component } from '@angular/core';
import { Feedback } from '../feedback';
import { FeedbackDTO } from '../feedback-dto';
import { FeedbackOperationService } from '../feedback-operation.service';

@Component({
  selector: 'app-patient-feedback',
  templateUrl: './patient-feedback.component.html',
  styleUrls: ['./patient-feedback.component.css']
})
export class PatientFeedbackComponent {

  //f:Feedback=new Feedback('','','',0,'');
  allFeedback:FeedbackDTO[]=[];
  rating =[1, 2, 3, 4, 5];

  constructor(private feedbackService: FeedbackOperationService){
     
  }

    viewAllFeedback(){
      this.feedbackService.getAllFeedback().subscribe(
        data=>{
          console.log("data-"+data);
          this.allFeedback=data;

        },err=>{
          console.log("error from spring",err);
        }
      );
    }

   getFeedbackByDoctorNames(doctorName:string){
    let name:string=doctorName;
    this.feedbackService.getFeedbackByDoctorName(name).subscribe(
      data=>{
        console.log("data-"+data);
        this.allFeedback=data;
      },err=>{
        console.log("Error from Spring",err);
      }
    );
   }

   getFeedbackByHospitalNames(hospitalName:string){
    let name:string=hospitalName;
    this.feedbackService.getFeedbackByHospitalName(name).subscribe(
      data=>{
        console.log("data-"+data);
        this.allFeedback=data;
      },err=>{
        console.log("Error from Spring",err);
      }
    );
   }


   getFeedbackByPatientNames(patientName:string){
    let name:string=patientName;
    this.feedbackService.getFeedbackByPatientName(name).subscribe(
      data=>{
        console.log("data-"+data);
        this.allFeedback=data;
      },err=>{
        console.log("Error from Spring",err);
      }
    );
   }
  
}
