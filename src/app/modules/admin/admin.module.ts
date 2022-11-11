import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './pages/users/users.component';
import { StoresComponent } from './pages/stores/stores.component';
import { TemplatesComponent } from './pages/templates/templates.component';
import { PlansComponent } from './pages/plans/plans.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../../../material.module';
import { AdminComponent } from './admin.component';

@NgModule({
  declarations: [
    UsersComponent,
    StoresComponent,
    TemplatesComponent,
    PlansComponent,
    AdminComponent,
  ],
  imports: [CommonModule, RouterModule, SharedModule, MaterialModule],
  providers: [],
})
export class AdminModule {}
