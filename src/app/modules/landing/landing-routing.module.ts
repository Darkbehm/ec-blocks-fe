import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { NonAuthorizedComponent } from './pages/non-authorized/non-authorized.component';
import { RegisterComponent } from './pages/register/register.component';
import { StoresLandingComponent } from './pages/stores-landing/stores-landing.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'register',
        component: RegisterComponent,
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'plans',
        component: HomeComponent,
      },
      {
        path: 'stores',
        component: StoresLandingComponent,
      },
      {
        path: 'nonAuthorized',
        component: NonAuthorizedComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LandingRoutingModule {}
