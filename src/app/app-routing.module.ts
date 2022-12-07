import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './core/guards/admin.guard';
import { AuthGuard } from './core/guards/auth.guard';
import { BusinessGuard } from './core/guards/business.guard';

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
    canActivate: [AuthGuard],
    canActivateChild: [AdminGuard],
    loadChildren: () =>
      import('./modules/admin/admin-routing.module').then(
        (m) => m.AdminRoutingModule,
      ),
  },
  {
    path: 'business',
    canActivate: [AuthGuard],
    canActivateChild: [BusinessGuard],
    loadChildren: () =>
      import('./modules/business/business-routing.module').then(
        (m) => m.BusinessRoutingModule,
      ),
  },
  {
    path: 'store',
    loadChildren: () =>
      import('./modules/store/stores-routing.module').then(
        (m) => m.StoreRoutingModule,
      ),
  },
  {
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
