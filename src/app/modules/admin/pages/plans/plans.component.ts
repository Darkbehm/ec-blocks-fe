import { Component } from '@angular/core';
import { Plan } from '../../interfaces/plan.interface';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.scss'],
})
export class PlansComponent {
  constructor() {}

  plans: Plan[] = [
    {
      id: 'abjk',
      name: 'Gratis',
      description:
        'Ideal para emprender tu pequeño negocio y empezar a ofrecer productos a tus clientes.',
      price: 0,
      priceMessage: 'Gratis para siempre',
      features: [
        {
          name: 'Caracteristica 1',
          isActive: true,
        },
        {
          name: 'Caracteristica 1',
          isActive: false,
        },
        {
          name: 'Caracteristica 1',
          isActive: true,
        },
      ],
    },
    {
      id: 'bjkbajkbd',
      name: 'Basico',
      description: 'dwbajfjkwbajf bfwjakbfwauivyvh',
      price: 12.99,
      priceMessage: 'fwabfwabjfbjkwafbjkjk',
      features: [
        {
          name: 'Caracteristica 1',
          isActive: false,
        },
        {
          name: 'Caracteristica 1',
          isActive: false,
        },
        {
          name: 'Caracteristica 1',
          isActive: true,
        },
      ],
    },
  ];
}
