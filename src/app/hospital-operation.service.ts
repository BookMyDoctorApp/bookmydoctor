import { Injectable } from '@angular/core';
import { Hospital } from './hospital';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HospitalDTO } from './hospital-dto';
import { DoctorDto } from './doctor-dto';
@Injectable({
  providedIn: 'root'
})
export class HospitalOperationService {
  hospitalArr:Hospital[] = [];

  baseURL:string = 'http://localhost:8080';
  hospitalByIdEndPoint:string=this.baseURL+'/hospital/id';
  allHospitalEndpoint:string=this.baseURL+'/hospital/list';
  hospitalByCityEndPoint:string=this.baseURL+'/hospital/city';
  hospitalByStateEndPoint:string=this.baseURL+'/hospital/state';
  allDoctorsEndPoint:string=this.baseURL+'/doctor/list'
  
  //localhost:8080/hospital/id/2c
  //localhost:8080/hospital/list
  //localhost:8080/hospital/city/Pune
  //localhost:8080/hospital/state/Maharashtra
  //localhost:8080/doctor/list
  constructor(private http:HttpClient)
  { 
  
  }

  getHospitalbyId(hospitalId:number):Observable<HospitalDTO[]>{
    console.log("Inside Method 1 "+this.hospitalByIdEndPoint);
    this.hospitalByIdEndPoint=this.hospitalByIdEndPoint+'/'+hospitalId;
    console.log("Inside Method 2 "+this.hospitalByIdEndPoint);
    return this.http.get<HospitalDTO[]>(`${this.hospitalByIdEndPoint}`);
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

  getAllDoctor():Observable<DoctorDto[]>
  {
    console.log("inside service : "+this.allDoctorsEndPoint);
    return this.http.get<DoctorDto[]>(`${this.allDoctorsEndPoint}`);
  }

}
