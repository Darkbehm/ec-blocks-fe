import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../material.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './modules/landing/components/navbar/navbar.component';
import { HomeComponent } from './modules/landing/pages/home/home.component';
import { BackgroundComponent } from './modules/landing/components/background/background.component';
import { SharedModule } from './modules/shared/shared.module';
import { AdminModule } from './modules/admin/admin.module';
import { CardLandingComponent } from './modules/landing/components/card-landing/card-landing.component';
import { FooterComponent } from './modules/landing/components/footer/footer.component';
import { RegisterComponent } from './modules/landing/pages/register/register.component';
import { CardFormComponent } from './modules/landing/components/card-form-register/card-form.component';
import { LoginComponent } from './modules/landing/pages/login/login.component';
import { CardFormLoginComponent } from './modules/landing/components/card-form-login/card-form-login.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    BackgroundComponent,
    CardLandingComponent,
    FooterComponent,
    RegisterComponent,
    CardFormComponent,
    LoginComponent,
    CardFormLoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    SharedModule,
    AdminModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
