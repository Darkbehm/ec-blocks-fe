import { Component, OnInit } from '@angular/core';
import { faChartColumn, faHandshake } from '@fortawesome/free-solid-svg-icons';
import { faClone } from '@fortawesome/free-regular-svg-icons';
import { fakeStores } from 'src/app/core/utils/fakeData';
import { FeatureCard, Store } from 'src/app/core/interfaces';
import { TokenStorageService } from 'src/app/core/services/token-storage.service';
import { USER_TYPES } from 'src/app/core/enums';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private tokenStorage: TokenStorageService) {}
  features: FeatureCard[] = [
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
  isLogged = false;
  userType = USER_TYPES.unknown;
  USER_TYPES = USER_TYPES;
  route = '/login';

  stores: Store[] = fakeStores.slice(0, 4);

  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  ngOnInit(): void {
    this.isLogged = !!this.tokenStorage.getToken();
    const routes = {
      [USER_TYPES.admin]: '/admin',
      [USER_TYPES.buyer]: '/cart',
      [USER_TYPES.seller]: '/business',
      [USER_TYPES.unknown]: '/register',
    };
    this.userType = this.tokenStorage.getUser()?.type ?? USER_TYPES.unknown;
    this.route = routes[this.userType];
  }
}
