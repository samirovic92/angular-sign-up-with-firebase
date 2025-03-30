import {Routes} from '@angular/router';
import {LandingComponent} from './components/landing/landing.component';
import {LoginComponent} from './components/login/login.component';
import {HomeComponent} from './components/home/home.component';
import {SingUpComponent} from './components/sing-up/sing-up.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: LandingComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'sing-up',
    component: SingUpComponent
  },
  {
    path: 'home',
    component: HomeComponent
  }
];
