import { Component, OnInit } from '@angular/core';
import { faChartColumn, faHandshake } from '@fortawesome/free-solid-svg-icons';
import { faClone } from '@fortawesome/free-regular-svg-icons';
import Feature from '../../models/feature.model';
import { Store } from 'src/app/modules/admin/interfaces/store.interface';
import { fakeStores } from 'src/utils/fakeData';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor() {}
  features: Feature[] = [
    {
      title: 'Te ayudamos a crecer',
      description:
        'Te listaremos junto con varios negocios, para que puedas llegar a muchos mas clientes.',
      icon: faHandshake,
      link: 'link1',
    },
    {
      title: 'Diseño modular',
      description:
        'Construye tu pagina con bloques modulares que puedes personalizar tanto como tu necesites.',
      icon: faClone,
      link: 'link2',
    },
    {
      title: 'Empieza gratis',
      description:
        'Aun si eres un pequeñoemprendedor, podras tener tu comercio en linea.',
      icon: faChartColumn,
      link: 'link3',
    },
  ];

  stores: Store[] = fakeStores.slice(0, 4);
  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void {}
}
