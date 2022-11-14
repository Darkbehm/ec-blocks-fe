import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/landing/landing-routing.module').then(
        (m) => m.LandingRoutingModule,
      ),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./modules/admin/admin-routing.module').then(
        (m) => m.AdminRoutingModule,
      ),
  },
  {
    path: 'business',
    loadChildren: () =>
      import('./modules/business/business-routing.module').then(
        (m) => m.BusinessRoutingModule,
      ),
    //everything else
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
