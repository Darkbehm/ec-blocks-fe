import { Component, OnInit } from '@angular/core';
import { USER_TYPES } from 'src/app/core/enums';
import { TokenStorageService } from 'src/app/core/services/token-storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  public USER_TYPES: typeof USER_TYPES = USER_TYPES;
  userType: USER_TYPES;
  isLogged = false;
  constructor(private tokenStorage: TokenStorageService) {}

  goHome() {
    console.log('go home');
  }

  logout() {
    this.tokenStorage.signOut();
    window.location.reload();
  }

  ngOnInit(): void {
    this.isLogged = !!this.tokenStorage.getToken();
    if (this.isLogged) {
      this.userType = this.tokenStorage.getUser().type;
    } else {
      this.userType = USER_TYPES.unknown;
    }
  }
}
