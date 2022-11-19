import { Component, Input } from '@angular/core';
import { LinkMenu } from 'src/app/core/interfaces/link-menu.interface';

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.scss'],
})
export class SidebarMenuComponent {
  @Input() linksMenu!: LinkMenu[];
  @Input() css!: string;

  constructor() {}
}
