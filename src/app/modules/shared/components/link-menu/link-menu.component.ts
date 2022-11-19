import { Component, Input } from '@angular/core';
import { LinkMenu } from 'src/app/core/interfaces';

@Component({
  selector: 'app-link-menu',
  templateUrl: './link-menu.component.html',
  styleUrls: ['./link-menu.component.scss'],
})
export class LinkMenuComponent {
  @Input() linkMenu!: LinkMenu;
  @Input() css!: string;

  constructor() {}
}
