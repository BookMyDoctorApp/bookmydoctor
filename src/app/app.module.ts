import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HospitalComponent } from './hospital/hospital.component';
import { DoctorComponent } from './doctor/doctor.component';
import { PatientComponent } from './patient/patient.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { MyAppointmentComponent } from './my-appointment/my-appointment.component';
import { ViewPatientComponent } from './view-patient/view-patient.component';
import { AddDiscriptionComponent } from './add-discription/add-discription.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { RouterModule, Routes } from '@angular/router';
import { AddAvailabilityComponent } from './add-availability/add-availability.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

const allLinks:Routes=[
  {path:'myAppointments',component:MyAppointmentComponent},
  {path:'viewPatient',component:ViewPatientComponent},
  {path:'addAvailability',component:AddAvailabilityComponent},
  {path:'myProfile',component:MyProfileComponent},
  {path:'viewFeedback',component:FeedbackComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HospitalComponent,
    DoctorComponent,
    PatientComponent,
    AppointmentComponent,
    FeedbackComponent,
    MyAppointmentComponent,
    ViewPatientComponent,
    AddDiscriptionComponent,
    MyProfileComponent,
    AddAvailabilityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(allLinks),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
