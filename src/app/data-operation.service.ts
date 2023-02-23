import { Injectable } from '@angular/core';

interface LoginUser{
  username:string;
  role:string;
  password:string;

}

@Injectable({
  providedIn: 'root'
})
export class DataOperationService {

  baseURL:string='http://localhost:62571';
  goToNewPage:string=this.baseURL;

  allLoginUsers:LoginUser[]=[];

  constructor() { 

    let user1:LoginUser = {
      username:"Admin",
      role:"admin",
      password:"123"
    }

    let user2:LoginUser = {
      username:"Mruns",
      role:"patient",
      password:"098"
    }

    let user3:LoginUser = {
      username:"Sakshi",
      role:"patient",
      password:"456"
    }

    let user4:LoginUser = {
      username:"Dr. Vedz",
      role:"doctor",
      password:"789"
    }

    let user5:LoginUser = {
      username:"Dr. Shra",
      role:"doctor",
      password:"267"
    }


    this.allLoginUsers=[user1,user2,user3,user4,user5];


  }


  


  doLogin(ipUsername:string,ipPassword:string):boolean
  {
    localStorage.removeItem('username')
    localStorage.removeItem('role')
    localStorage.removeItem('loginStatus')

    console.log("inside Service : "+ipUsername+" & "+ipPassword);

    for(let i=0;i<this.allLoginUsers.length;i++){
      let thisUser:LoginUser = this.allLoginUsers[i];

      if(thisUser.username == ipUsername && thisUser.password ==ipPassword){

        localStorage.setItem("username",ipUsername);
        localStorage.setItem("role",thisUser.role);
        localStorage.setItem("loginStatus",true+'');


        console.log("Inside Service for true");

        return true;

      }
    }

    return false;

}

doUserLogout()
  {
    localStorage.removeItem('username')
    localStorage.removeItem('role')
    localStorage.removeItem('loginStatus')
    

    console.log("inside Service logout ");

  }

}
