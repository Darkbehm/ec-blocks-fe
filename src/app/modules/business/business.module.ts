import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusinessComponent } from './business.component';
import { ConfigurationComponent } from './pages/configuration/configuration.component';
import { PagesComponent } from './pages/pages/pages.component';
import { ProductsCategoriesComponent } from './pages/products-categories/products-categories.component';
import { SalesComponent } from './pages/sales/sales.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { MaterialModule } from '../../../material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CategoriesComponent } from './components/categories/categories.component';
import { ManagePagesComponent } from './components/manage-pages/manage-pages.component';
import { EditBlockComponent } from './components/edit-block/edit-block.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    BusinessComponent,
    ConfigurationComponent,
    PagesComponent,
    ProductsCategoriesComponent,
    SalesComponent,
    ProductsComponent,
    CategoriesComponent,
    ManagePagesComponent,
    EditBlockComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    SharedModule,
    MaterialModule,
    FontAwesomeModule,
  ],
})
export class BusinessModule {}
