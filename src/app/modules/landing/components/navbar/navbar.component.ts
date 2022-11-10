import { Component, OnInit } from '@angular/core';
import { USER_TYPES } from '../../models/user.model';

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
