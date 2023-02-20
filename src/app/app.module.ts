import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AboutPipe } from './about-pipe';

import { AppComponent } from './app.component';
import { HospitalAdminComponent } from './hospital-admin/hospital-admin.component';
import { UserComponent } from './user/user.component';
import { PipeTaskComponent } from './pipe-task/pipe-task.component';
import { HealthAwarenessComponent } from './health-awareness/health-awareness.component';
import { UpcomingEventsComponent } from './upcoming-events/upcoming-events.component';
import { FirstAidWorkshopComponent } from './first-aid-workshop/first-aid-workshop.component';
import { HospitalDetailsComponent } from './hospital-details/hospital-details.component';
import { InfoPipe } from './info-pipe';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TDFHospitalPageComponent } from './tdfhospital-page/tdfhospital-page.component';
import { HttpClientModule } from '@angular/common/http';

const allLinks:Routes=[
  {path:'registerhospital',component:HospitalAdminComponent},
  {path:'hospital',component:UserComponent},
  {path:'upcomingevents',component:UpcomingEventsComponent},
  {path:'firstaidworkshop',component:FirstAidWorkshopComponent},
  {path:'healthawareness',component:HealthAwarenessComponent},
  {path:'hospitalDetail/hid',component:HospitalDetailsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HospitalAdminComponent,
    UserComponent,
    AboutPipe,
    PipeTaskComponent,
    HealthAwarenessComponent,
    UpcomingEventsComponent,
    FirstAidWorkshopComponent,
    HospitalDetailsComponent,
    InfoPipe,
    TDFHospitalPageComponent
  ],

  imports: [
    BrowserModule,
    RouterModule.forRoot(allLinks),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
