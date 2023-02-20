import { Injectable } from '@angular/core';
import { Hospital } from './hospital';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HospitalDto } from './hospital-dto';

@Injectable({
  providedIn: 'root'
})
export class HospitalOperationsService {
  
  baseURL:string = 'http://localhost:2002';
  hospitalByCityEndPoint:string=this.baseURL+'/hospital/city';
  //localhost:2002/hospital/city/Pune
  //http://localhost:2002/hospital/city/Pune
  hospitalArr:Hospital[] = [];

  constructor(private http:HttpClient) { 
    
    console.log("Inside Constructor "+this.hospitalByCityEndPoint);
  
  }

  getHospitalsDetailsbyCity(city:string):Observable<HospitalDto[]>{
    console.log("Inside Method 1 "+this.hospitalByCityEndPoint);
    this.hospitalByCityEndPoint=this.hospitalByCityEndPoint+'/'+city;
    console.log("After adding city 2 "+this.hospitalByCityEndPoint);

    return this.http.get<HospitalDto[]>(`${this.hospitalByCityEndPoint}`);
  }

  addHospital(hospitalFromUser:Hospital)
  {
    
    this.hospitalArr.push(hospitalFromUser); 
    console.log("Inside Hospital Service : Hospital Added "+hospitalFromUser.hospitalId);
    console.log(" Total Hospital are :- "+this.hospitalArr.length);
    
  }

  getHospitalArr():Hospital[]
  {
    return this.hospitalArr;
  }

  getHospitalsBySpeciality(filterSpeciality:string):Hospital[]
  {
   let outputArr:Hospital[] = [];

    this.hospitalArr.forEach(h=>{
      if(h.speciality == filterSpeciality)
      {
        outputArr.push(h);
      }
    });

    return outputArr;
  }

  getHospitalsByState(filterState:string):Hospital[]
  {
   let outputArr:Hospital[] = [];

    this.hospitalArr.forEach(h=>{
      if(h.hospitalState == filterState)
      {
        outputArr.push(h);
      }
    });

    return outputArr;
  }

  getHospitalsByCity(filterCity:string):Hospital[]
  {
   let outputArr:Hospital[] = [];

    this.hospitalArr.forEach(h=>{
      if(h.hospitalCity == filterCity)
      {
        outputArr.push(h);
      }
    });

    return outputArr;
  }

  getHospitalByNumber(searchHospitalid:number):Hospital{
    let outputHospital:Hospital=new Hospital(0,'','','','','',0,0,'');
    for(let i=0;i<this.hospitalArr.length;i++){
      let thisHospital:Hospital=this.hospitalArr[i];
      if(thisHospital.hospitalId==searchHospitalid){
        outputHospital=thisHospital;
        break;
      }
    }
    return outputHospital;
  }
  
}