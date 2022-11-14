import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dashed-border',
  templateUrl: './dashed-border.component.html',
  styleUrls: ['./dashed-border.component.scss'],
})
export class DashedBorderComponent {
  @Input() css!: string;
  constructor() {}
}
