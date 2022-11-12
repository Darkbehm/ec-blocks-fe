import { Component } from '@angular/core';
import { LinkMenu } from '../../../shared/interfaces/link-menu.interface';
import { linksMenu } from '../../utils/linksMenu';

@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.scss'],
})
export class StoresComponent {
  links: LinkMenu[] = linksMenu;
  constructor() {}
}
