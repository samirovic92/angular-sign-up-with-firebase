import {Routes} from '@angular/router';
import {LandingComponent} from './components/landing/landing.component';
import {LoginComponent} from './components/login/login.component';
import {HomeComponent} from './components/home/home.component';
import {SingUpComponent} from './components/sing-up/sing-up.component';
import {canActivate, redirectLoggedInTo, redirectUnauthorizedTo} from '@angular/fire/auth-guard';

const redirectToLogin = () => redirectUnauthorizedTo(['login']);
const redirectToHome = () => redirectLoggedInTo(['home']);

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: LandingComponent
  },
  {
    path: 'login',
    component: LoginComponent,
    ...canActivate(redirectToHome)
  },
  {
    path: 'sing-up',
    component: SingUpComponent,
    ...canActivate(redirectToHome)
  },
  {
    path: 'home',
    component: HomeComponent,
    ...canActivate(redirectToLogin)
  }
];
