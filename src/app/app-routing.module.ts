import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { SigninComponent } from './pages/signin/signin.component';
import  { IntroComponent } from './pages/intro/intro.component';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes = [
  { 
    path: '',
    component: HomeComponent
  },
  { 
    path: 'home',
    component: HomeComponent
  },
  { 
    path: 'intro',
    component: IntroComponent
  },
  { 
    path: 'contact',
    component: ContactComponent
  },
  {
    path:'signin',
    component: SigninComponent
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule { }
