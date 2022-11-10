import { Component } from '@angular/core';
import { LinkMenu } from '../../../shared/interfaces/link-menu.interface';
import { linksMenu } from '../../utils/linksMenu';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent {
  links: LinkMenu[] = linksMenu;

  constructor() {}
}
