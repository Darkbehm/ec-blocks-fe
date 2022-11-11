import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoresComponent } from './pages/stores/stores.component';
import { UsersComponent } from './pages/users/users.component';
import { TemplatesComponent } from './pages/templates/templates.component';
import { PlansComponent } from './pages/plans/plans.component';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'users',
        component: UsersComponent,
      },
      {
        path: 'stores',
        component: StoresComponent,
      },
      {
        path: 'templates',
        component: TemplatesComponent,
      },
      {
        path: 'plans',
        component: PlansComponent,
      },
      // {
      //   path: '**',
      //   redirectTo: 'users',
      // },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
