import { Component } from '@angular/core';
import { LinkMenu } from '../../../shared/interfaces/link-menu.interface';
import { linksMenu } from '../../utils/linksMenu';

@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.scss'],
})
export class TemplatesComponent {
  links: LinkMenu[] = linksMenu;
  constructor() {}
}
