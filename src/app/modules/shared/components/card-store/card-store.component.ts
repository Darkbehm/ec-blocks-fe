import { Component, Input, OnInit } from '@angular/core';
import { Store } from 'src/app/modules/admin/interfaces/store.interface';

@Component({
  selector: 'app-card-store',
  templateUrl: './card-store.component.html',
  styleUrls: ['./card-store.component.scss'],
})
export class CardStoreComponent implements OnInit {
  @Input() store: Store;
  getBgImage(): string {
    return `url(${this.store.bgImage})`;
  }
  constructor() {}

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void {}
}
