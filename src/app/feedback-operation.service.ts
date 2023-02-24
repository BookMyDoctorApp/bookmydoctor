import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FeedbackDTO } from './feedback-dto';
import { Feedback } from './feedback';

@Injectable({
  providedIn: 'root'
})
export class FeedbackOperationService {

  baseURL:string ='http://localhost:2024';
  allFeedbackEndPoint:string=this.baseURL+'/feedback/list';
  submitFeedbackEndPoint:string=this.baseURL+'/feedback/submit';
  feedbackByDoctorNameEndPoint:string=this.baseURL+'/feedback/doctor';
  feedbackByHospitalNameEndPoint:string=this.baseURL+'/feedback/hospital';
  feedbackByPatientNameEndPoint:string=this.baseURL+'/feedback/patient';

  feedbackArr:FeedbackDTO[]=[];

  constructor(private http:HttpClient) { 

  }

  //localhost:2024/feedback/list

  

  getFeedbackByDoctorName(doctorName:string):Observable<FeedbackDTO[]>{
    console.log("Inside method 1"+this.feedbackByDoctorNameEndPoint);
    this.feedbackByDoctorNameEndPoint=this.feedbackByDoctorNameEndPoint+'/'+doctorName;
    console.log("After getting feedback"+this.feedbackByDoctorNameEndPoint);

    return this.http.get<FeedbackDTO[]>(`${this.feedbackByDoctorNameEndPoint}`);
  }

  getFeedbackByHospitalName(hospitalName:string):Observable<FeedbackDTO[]>{
    console.log("Inside method 1"+this.feedbackByHospitalNameEndPoint);
    this.feedbackByHospitalNameEndPoint=this.feedbackByHospitalNameEndPoint+'/'+hospitalName;
    console.log("After getting feedback"+this.feedbackByHospitalNameEndPoint);

    return this.http.get<FeedbackDTO[]>(`${this.feedbackByHospitalNameEndPoint}`);
  }

  getFeedbackByPatientName(patientName:string):Observable<FeedbackDTO[]>{
    console.log("Inside method 1"+this.feedbackByPatientNameEndPoint);
    this.feedbackByPatientNameEndPoint=this.feedbackByPatientNameEndPoint+'/'+patientName;
    console.log("After getting feedback"+this.feedbackByPatientNameEndPoint);

    return this.http.get<FeedbackDTO[]>(`${this.feedbackByPatientNameEndPoint}`);
  }

  getAllFeedback():Observable<FeedbackDTO[]>{
    console.log("Inside Service"+this.allFeedbackEndPoint);
    return this.http.get<FeedbackDTO[]>(`${this.allFeedbackEndPoint}`);

  }
/*
  submitFeedback():Observable<FeedbackDTO[]>{
    console.log("Feedback Accepted");
    return this.http.post<
    // return this.http.post<FeedbackDTO[]>(`${this.submitFeedbackEndPoint}`);
  }*/

  submitFeedback(feedback: Feedback):Observable<Feedback> {

    console.log("inside method 1 : Feedback added" +feedback);
    //console.log(feedback.hospitalName);
    return this.http.post<Feedback>(`${this.submitFeedbackEndPoint}`,feedback);
    
  }


}
