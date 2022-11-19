import { Component } from '@angular/core';
import { LinkMenu } from 'src/app/core/interfaces';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent {
  linksMenu: LinkMenu[] = [
    {
      name: 'Usuarios',
      icon: 'person',
      route: '/admin/users',
    },
    {
      name: 'Tiendas',
      icon: 'store',
      route: '/admin/stores',
    },
    {
      name: 'Plantillas',
      icon: 'web',
      route: '/admin/templates/create',
    },
    {
      name: 'Planes',
      icon: 'sell',
      route: '/admin/plans/create',
    },
  ];
}
