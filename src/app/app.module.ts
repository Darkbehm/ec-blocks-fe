import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../material.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavbarComponent } from './modules/landing/components/navbar/navbar.component';
import { HomeComponent } from './modules/landing/pages/home/home.component';
import { BackgroundComponent } from './modules/landing/components/background/background.component';
import { SharedModule } from './modules/shared/shared.module';
import { AdminModule } from './modules/admin/admin.module';
import { BusinessModule } from './modules/business/business.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    BackgroundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    SharedModule,
    AdminModule,
    BusinessModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
