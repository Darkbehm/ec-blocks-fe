import { Component, OnInit } from '@angular/core';
import { Store } from 'src/app/core/interfaces';
import { fakeStores } from 'src/app/core/utils/fakeData';

@Component({
  selector: 'app-stores',
  templateUrl: './stores-landing.component.html',
  styleUrls: ['./stores-landing.component.scss'],
})
export class StoresLandingComponent implements OnInit {
  stores: Store[] = fakeStores;
  constructor() {}

  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  //eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void {}
}
