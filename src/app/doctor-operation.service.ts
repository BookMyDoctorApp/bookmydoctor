import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DoctorDTO } from './doctor-dto';

@Injectable({
  providedIn: 'root'
})
export class DoctorOperationService {

  baseURL:string = 'http://localhost:2002';
  doctorByIdEndPoint:string=this.baseURL+'/doctor/id';
  //localhost:2002/doctor/503
  //localhost:2002/appointment/register
  constructor(private http:HttpClient) { }

  getDoctorbyId(doctorId:number):Observable<DoctorDTO>{
    console.log("Inside Method 1 "+this.doctorByIdEndPoint);
    this.doctorByIdEndPoint=this.doctorByIdEndPoint+'/'+doctorId;
    console.log("Inside Method 2 "+this.doctorByIdEndPoint);
    return this.http.get<DoctorDTO>(`${this.doctorByIdEndPoint}`);
  }
}
