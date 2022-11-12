import { Component } from '@angular/core';
import { LinkMenu } from '../../../shared/interfaces/link-menu.interface';
import { linksMenu } from '../../utils/linksMenu';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.scss'],
})
export class PlansComponent {
  links: LinkMenu[] = linksMenu;
  constructor() {}
}
