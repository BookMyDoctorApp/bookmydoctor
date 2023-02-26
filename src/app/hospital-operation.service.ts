import { Injectable } from '@angular/core';
import { Hospital } from './hospital';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HospitalDTO } from './hospital-dto';
import { DoctorDto } from './doctor-dto';
import { PatientDTO } from './patient-dto';
import { AppointmentDTO } from './appointment-dto';
import { FeedbackDTO } from './feedback-dto';
@Injectable({
  providedIn: 'root'
})
export class HospitalOperationService {

  hospitals:Hospital=new Hospital(0,'','','','',0,'');

  hospitalArr:Hospital[] = [];

  baseURL:string = 'http://localhost:8080';
  hospitalByIdEndPoint:string=this.baseURL+'/hospital/id';
  allHospitalEndpoint:string=this.baseURL+'/hospital/list';
  hospitalByCityEndPoint:string=this.baseURL+'/hospital/city';
  hospitalByStateEndPoint:string=this.baseURL+'/hospital/state';
  allDoctorsEndPoint:string=this.baseURL+'/doctor/list';
  allPatientEndPoint:string=this.baseURL+'/patient/list';
  viewAppointmentEndPoint:string=this.baseURL+'/appointment/list';
  addHospitalEndPoint:string=this.baseURL+'/hospital/add';
  getAllDoctorsbyHospitalEndPoint:string=this.baseURL+'/hospital/allDoctors/id';
  addDoctorEndPoint:string=this.baseURL+'/doctor/register';
  feedbackByDoctorNameEndPoint:string=this.baseURL+'/feedback/doctor';

  //localhost:8080/hospital/id/2c
  //localhost:8080/hospital/list
  //localhost:8080/hospital/city/Pune
  //localhost:8080/hospital/state/Maharashtra
  //localhost:8080/doctor/list
 // localhost:8080/hospital/add
 //localhost:8080/hospital/allDoctors/id/2
 //localhost:8080/doctor/{doctorId}

  constructor(private http:HttpClient)
  { 
  
  }

  getAllHospital():Observable<HospitalDTO[]>
  {
    console.log("inside service : "+this.allHospitalEndpoint);
    return this.http.get<HospitalDTO[]>(`${this.allHospitalEndpoint}`);
  }

  getHospitalByCity(city:string):Observable<HospitalDTO[]>{
    console.log("Inside Method 1 "+this.hospitalByCityEndPoint);
    this.hospitalByCityEndPoint=this.hospitalByCityEndPoint+'/'+city;
    console.log("After adding city 2 "+this.hospitalByCityEndPoint);

    return this.http.get<HospitalDTO[]>(`${this.hospitalByCityEndPoint}`);
  }

  getHospitalByState(state:string):Observable<HospitalDTO[]>{
    console.log("Inside Method 1 "+this.hospitalByStateEndPoint);
    this.hospitalByStateEndPoint=this.hospitalByStateEndPoint+'/'+state;
    console.log("After adding state 2 "+this.hospitalByStateEndPoint);

    return this.http.get<HospitalDTO[]>(`${this.hospitalByStateEndPoint}`);
  }

  getHospitalbyId(hospitalId:number):Observable<Hospital>{
    console.log("Inside Method 1 "+this.hospitalByIdEndPoint);
    this.hospitalByIdEndPoint=this.hospitalByIdEndPoint+'/'+hospitalId;
    console.log("Inside Method 2 "+this.hospitalByIdEndPoint);
    return this.http.get<Hospital>(`${this.hospitalByIdEndPoint}`);
  }

  getAllDoctor():Observable<DoctorDto[]>
  {
    console.log("inside service : "+this.allDoctorsEndPoint);
    return this.http.get<DoctorDto[]>(`${this.allDoctorsEndPoint}`);
  }

  getAllPatient():Observable<PatientDTO[]>
  {
    console.log("inside service : "+this.allPatientEndPoint);
    return this.http.get<PatientDTO[]>(`${this.allPatientEndPoint}`);
  }

  getAllAppointments():Observable<AppointmentDTO[]>
  {
    console.log("inside service : "+this.viewAppointmentEndPoint);
    return this.http.get<AppointmentDTO[]>(`${this.viewAppointmentEndPoint}`);
  }

  
    addHospital(hospital:Hospital):Observable<Hospital>{
      console.log("inside service: "+hospital);
      return this.http.post<Hospital>(`${this.addHospitalEndPoint}`,hospital);
    }

    getAllDoctorsbyHospital(hospitalId:number):Observable<DoctorDto[]>{
      console.log("Inside Method 1 "+this.getAllDoctorsbyHospitalEndPoint);
      this.getAllDoctorsbyHospitalEndPoint=this.getAllDoctorsbyHospitalEndPoint+'/'+hospitalId;
      console.log("After adding city 2 "+this.getAllDoctorsbyHospitalEndPoint);
  
      return this.http.get<DoctorDto[]>(`${this.getAllDoctorsbyHospitalEndPoint}`);
    }

    addDoctor():Observable<DoctorDto[]>{
    console.log("inside service : "+this.addDoctorEndPoint);
    return this.http.get<DoctorDto[]>(`${this.addDoctorEndPoint}`);
    }

    getFeedbackByDoctorName(doctorName:string):Observable<FeedbackDTO[]>{
      console.log("Inside method 1"+this.feedbackByDoctorNameEndPoint);
      this.feedbackByDoctorNameEndPoint=this.feedbackByDoctorNameEndPoint+'/'+doctorName;
      console.log("After getting feedback"+this.feedbackByDoctorNameEndPoint);
  
      return this.http.get<FeedbackDTO[]>(`${this.feedbackByDoctorNameEndPoint}`);
    }
    
}
