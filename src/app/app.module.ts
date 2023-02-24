import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientFeedbackComponent } from './patient-feedback/patient-feedback.component';
import { RouterModule, Routes } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';

import { AddFeedbackComponent } from './add-feedback/add-feedback.component';
import { HeaderComponent } from './header/header.component';
import { Page1Component } from './page1/page1.component';


const allLinks:Routes=[
{path:'addFeedback',component:AddFeedbackComponent},
{path:'viewFeedback',component:PatientFeedbackComponent},
{path: 'page1',component:Page1Component}


]

@NgModule({
  declarations: [
    AppComponent,
    PatientFeedbackComponent,
   
    AddFeedbackComponent,
    HeaderComponent,
    Page1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(allLinks),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
