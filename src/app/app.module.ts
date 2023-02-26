import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddDoctorComponent } from './add-doctor/add-doctor.component';
import { ViewPatientComponent } from './view-patient/view-patient.component';
import { ViewAppointmentComponent } from './view-appointment/view-appointment.component';
import { ViewFeedbacksComponent } from './view-feedbacks/view-feedbacks.component';
import { ViewDoctorsComponent } from './view-doctors/view-doctors.component';
import { AddHospitalComponent } from './add-hospital/add-hospital.component';
import { ViewHospitalComponent } from './view-hospital/view-hospital.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ApolloComponent } from './apollo/apollo.component';
import { AfeedbackComponent } from './afeedback/afeedback.component';

const allLinks:Routes=[
  {path:'addHospital',component:AddHospitalComponent},
  {path:'addDoctor',component:AddDoctorComponent},
  {path:'viewHospital',component:ViewHospitalComponent},
  {path:'viewDoctors',component:ViewDoctorsComponent},
  {path:'viewPatient',component:ViewPatientComponent},
  {path:'viewAppointment',component:ViewAppointmentComponent},
  {path:'viewFeedbacks',component:ViewFeedbacksComponent},
  {path:'search',component:ApolloComponent},
  {path:'feedback',component:AfeedbackComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    AddDoctorComponent,
    ViewPatientComponent,
    ViewAppointmentComponent,
    ViewFeedbacksComponent,
    ViewDoctorsComponent,
    AddHospitalComponent,
    ViewHospitalComponent,
    ApolloComponent,
    AfeedbackComponent
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

