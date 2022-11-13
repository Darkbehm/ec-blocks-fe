import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoresComponent } from './pages/stores/stores.component';
import { UsersComponent } from './pages/users/users.component';
import { TemplatesComponent } from './pages/templates/templates.component';
import { PlansComponent } from './pages/plans/plans.component';
import { ManagePlanComponent } from './components/manage-plan/manage-plan.component';
import { AdminComponent } from './admin.component';
import { ManageTemplateComponent } from './components/manage-template/manage-template.component';

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
        children: [
          {
            path: 'edit/:id',
            component: ManageTemplateComponent,
          },
          {
            path: 'create',
            component: ManageTemplateComponent,
          },
        ],
      },
      {
        path: 'plans',
        component: PlansComponent,
        children: [
          {
            path: 'edit/:id',
            component: ManagePlanComponent,
          },
          {
            path: 'create',
            component: ManagePlanComponent,
          },
        ],
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
