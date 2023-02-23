import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component {
name:string='';

constructor(private router: Router){
  this.name=localStorage.getItem('role')|| '';
}


Profile(){
this.router.navigateByUrl('/userProfile');


}


}
