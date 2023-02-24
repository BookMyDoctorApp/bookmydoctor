import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Feedback } from '../feedback';
import { FeedbackOperationService } from '../feedback-operation.service';


@Component({
  selector: 'app-add-feedback',
  templateUrl: './add-feedback.component.html',
  styleUrls: ['./add-feedback.component.css']
})
export class AddFeedbackComponent {
  
  //allFeedbacks:Feedback[]=[];
  
  feedbackService: FeedbackOperationService;
  status = false;
  message = '';
  rating =[1, 2, 3, 4, 5];
  f: Feedback = new Feedback(0,'','', '',0,'' );

  constructor(feedbackService: FeedbackOperationService,private router: Router) {
    this.feedbackService = feedbackService;
  }
  
  onSubmit() {
    // console.log(this.f);
    
    this.feedbackService.submitFeedback(this.f).subscribe(
      
    
      data=>{
        this.status=true;
        this.message="feedback submitted";
        console.log(data);
      
      },
      err=>{
console.log(err);

      }

    )
    
  
  }

  moveToPage1(){
    this.router.navigate(['page1']);
  }
  
  /*f:Feedback=new Feedback('','','',0,'');
  feedbackService:FeedbackOperationService;
  allFeedback:FeedbackDTO[]=[];
  
  router:Router;
  activeRoute:ActivatedRoute;

  constructor( feedbackService: FeedbackOperationService,router:Router,
    activeRoute:ActivatedRoute){
      this.feedbackService=feedbackService;
      this.router=router;
      this.activeRoute=activeRoute;

    }

    submitFeedback(){
      
    }
*/
    // submitFeedback(feedback:string){
    //   let addFeedback:string=feedback;
    // this.feedbackService.getFeedbackByDoctorName(addFeedback).subscribe(
    //     data=>{
    //       console.log("data-"+data);
    //       this.allFeedback=data;
    //     },err=>{
    //       console.log("error from spring",err);
    //     }
    //   );
    // }
  
}
