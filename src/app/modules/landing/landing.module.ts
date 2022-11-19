import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MaterialModule } from '../../../material.module';
import { SharedModule } from '../shared/shared.module';
import { BackgroundComponent } from './components/background/background.component';
import { CardFormLoginComponent } from './components/card-form-login/card-form-login.component';
import { CardFormComponent } from './components/card-form-register/card-form.component';
import { CardLandingComponent } from './components/card-landing/card-landing.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { StoresLandingComponent } from './pages/stores-landing/stores-landing.component';

@NgModule({
  declarations: [
    NavbarComponent,
    HomeComponent,
    BackgroundComponent,
    CardLandingComponent,
    FooterComponent,
    RegisterComponent,
    CardFormComponent,
    LoginComponent,
    CardFormLoginComponent,
    StoresLandingComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    SharedModule,
    MaterialModule,
    FontAwesomeModule,
  ],
})
export class LandingModule {}
