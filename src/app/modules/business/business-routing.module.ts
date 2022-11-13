import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessComponent } from './business.component';
import { ProductsComponent } from './components/products/products.component';
import { ConfigurationComponent } from './pages/configuration/configuration.component';
import { PagesComponent } from './pages/pages/pages.component';
import { ProductsCategoriesComponent } from './pages/products-categories/products-categories.component';
import { SalesComponent } from './pages/sales/sales.component';
import { CategoriesComponent } from './components/categories/categories.component';

const routes: Routes = [
  {
    path: '',
    component: BusinessComponent,
    children: [
      {
        path: 'configuration',
        component: ConfigurationComponent,
      },
      {
        path: 'pages',
        component: PagesComponent,
        children: [
          {
            path: 'edit/:id',
            component: PagesComponent,
          },
          {
            path: 'create',
            component: PagesComponent,
          },
        ],
      },
      {
        path: 'products-categories',
        component: ProductsCategoriesComponent,
        children: [
          {
            path: 'products',
            component: ProductsComponent,
            children: [
              {
                path: 'create',
                component: ProductsComponent,
              },
              {
                path: 'edit/:id',
                component: ProductsComponent,
              },
            ],
          },
          {
            path: 'categories',
            component: CategoriesComponent,
            children: [
              {
                path: 'create',
                component: CategoriesComponent,
              },
              {
                path: 'edit/:id',
                component: CategoriesComponent,
              },
            ],
          },
        ],
      },
      {
        path: 'sales',
        component: SalesComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class BusinessRoutingModule {}
