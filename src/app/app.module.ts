import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import {  HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HelpComponent } from './help/help.component';


const allLinks:Routes = [
  
{path:'register1',component:RegisterComponent},
{path:'login1',component:LoginComponent},
// {path:'aboutUs',component:AboutUsComponent},
//   {path:'homePage',component:HomePageComponent},
//   {path:'help',component:HelpComponent}
 {path:'aboutUs',component:AboutUsComponent},
 {path:'homePage',component:HomePageComponent},
 {path:'help',component:HelpComponent},
  
]

   


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    AboutUsComponent,
    HomePageComponent,
    HelpComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(allLinks),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
