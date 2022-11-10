import { LinkMenu } from '../../shared/interfaces/link-menu.interface';

export const linksMenu: LinkMenu[] = [
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
    route: '/admin/templates',
  },
  {
    name: 'Planes',
    icon: 'sell',
    route: '/admin/plans',
  },
];
