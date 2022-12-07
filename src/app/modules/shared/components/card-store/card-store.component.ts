import { Component, Input, OnInit } from '@angular/core';
import { Store } from 'src/app/core/interfaces';

@Component({
  selector: 'app-card-store',
  templateUrl: './card-store.component.html',
  styleUrls: ['./card-store.component.scss'],
})
export class CardStoreComponent implements OnInit {
  @Input() store: Store;

  constructor() {}

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void {}
}
