import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LoginPage';


  constructor(private router:Router){

  }

  moveToLogin(){
    this.router.navigate(['login1']);
  }
}
