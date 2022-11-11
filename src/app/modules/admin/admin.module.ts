import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './pages/users/users.component';
import { StoresComponent } from './pages/stores/stores.component';
import { TemplatesComponent } from './pages/templates/templates.component';
import { PlansComponent } from './pages/plans/plans.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../../../material.module';
import { ManagePlanComponent } from './components/manage-plan/manage-plan.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './admin.component';
import { ManageTemplateComponent } from './components/manage-template/manage-template.component';

@NgModule({
  declarations: [
    UsersComponent,
    StoresComponent,
    TemplatesComponent,
    PlansComponent,
    ManagePlanComponent,
    AdminComponent,
    ManageTemplateComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  providers: [],
})
export class AdminModule {}
