import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './pages/users/users.component';
import { StoresComponent } from './pages/stores/stores.component';
import { TemplatesComponent } from './pages/templates/templates.component';
import { PlansComponent } from './pages/plans/plans.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    UsersComponent,
    StoresComponent,
    TemplatesComponent,
    PlansComponent,
  ],
  imports: [CommonModule, RouterModule, SharedModule],
})
export class AdminModule {}
