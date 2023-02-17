import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { single } from 'rxjs';
import { ArtformComponent } from './pages/artform/artform.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { SingleComponent } from './pages/single/single.component';

const routes: Routes = [
 {
  path:'',component:HomepageComponent
 },
 {
  path:'contact',component:ContactComponent
 },
 {
  path:'artform',component:ArtformComponent
 },
 {
  path:'signup',component:SignupComponent
 },
 {
  path:'signin',component:SigninComponent
 },
 {
  path: 'single', component:SingleComponent
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
