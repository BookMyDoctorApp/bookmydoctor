import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppointmentDTO } from './appointment-dto';
import { Doctor } from './doctor';
import { DoctorDTO } from './doctor-dto';
import { FeedbackDTO } from './feedback-dto';
import { PatientDTO } from './patient-dto';

@Injectable({
  providedIn: 'root'
})
export class DoctorOperationService {

  baseURL:string = 'http://localhost:2002';
  doctorByIdEndPoint:string=this.baseURL+'/doctor/id';
  viewAppointmentEndPoint:string=this.baseURL+'/appointment/list';
  allPatientEndPoint:string=this.baseURL+'/patient/list';
  feedbackByDoctorEndPoint:string=this.baseURL+'/feedback/doctor';
  addDoctorEndPoint:string=this.baseURL+'/doctor/register';

  //localhost:2002/doctor/503
  //localhost:2002/appointment/register
  //localhost:2002/appointment/list
  //localhost:2002/patient/list
  //localhost:2002/feedback/doctor/Vedika
  //localhost:2002/doctor/register

  constructor(private http:HttpClient) { }

  getDoctorbyId(doctorId:number):Observable<DoctorDTO>{
    console.log("Inside Method 1 "+this.doctorByIdEndPoint);
    this.doctorByIdEndPoint=this.doctorByIdEndPoint+'/'+doctorId;
    console.log("Inside Method 2 "+this.doctorByIdEndPoint);
    return this.http.get<DoctorDTO>(`${this.doctorByIdEndPoint}`);
  }

  getAllAppointment():Observable<AppointmentDTO[]>
  {
    console.log("inside service : "+this.viewAppointmentEndPoint);
    return this.http.get<AppointmentDTO[]>(`${this.viewAppointmentEndPoint}`);
  }

  getAllPatient():Observable<PatientDTO[]>
  {
    console.log("inside service : "+this.allPatientEndPoint);
    return this.http.get<PatientDTO[]>(`${this.allPatientEndPoint}`);
  }

  getFeedbackbyDoctor(doctorName:string):Observable<FeedbackDTO[]>
  {
    console.log("Inside Method 1 "+this.feedbackByDoctorEndPoint);
    this.feedbackByDoctorEndPoint=this.feedbackByDoctorEndPoint+'/'+doctorName;
    console.log("Inside Method 2 "+this.feedbackByDoctorEndPoint);
    return this.http.get<FeedbackDTO[]>(`${this.feedbackByDoctorEndPoint}`);
  }

  addDoctor(doctor:Doctor):Observable<Doctor>{
    console.log("inside service: "+doctor);
    return this.http.post<Doctor>(`${this.addDoctorEndPoint}`,doctor);
  }

}
