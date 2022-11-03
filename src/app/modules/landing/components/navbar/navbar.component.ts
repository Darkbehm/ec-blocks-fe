import { Component, OnInit } from '@angular/core';

enum USER_TYPES {
  admin = 'admin',
  seller = 'seller',
  buyer = 'buyer',
  unknown = 'unknown',
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  public USER_TYPES: typeof USER_TYPES = USER_TYPES;
  userType = USER_TYPES.unknown;
  constructor() {}

  goHome() {
    console.log('go home');
  }
  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void {}
}
