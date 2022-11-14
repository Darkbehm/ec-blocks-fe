import { Component } from '@angular/core';
import { LinkMenu } from '../shared/interfaces/link-menu.interface';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.scss'],
})
export class BusinessComponent {
  linksMenu: LinkMenu[] = [
    {
      name: 'Configuracion',
      icon: 'settings',
      route: '/business/configuration',
    },
    {
      name: 'Paginas',
      icon: 'description',
      route: '/business/pages',
    },
    {
      name: 'Productos y Categorias',
      icon: 'inventory_2',
      route: '/business/products-categories',
    },
    {
      name: 'Ventas',
      icon: 'bar_chart',
      route: '/business/sales',
    },
  ];
}
