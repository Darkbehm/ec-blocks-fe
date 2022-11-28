import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateChild,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { USER_TYPES } from '../enums';
import { TokenStorageService } from '../services/token-storage.service';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivateChild {
  constructor(
    private tokenStorage: TokenStorageService,
    private router: Router,
  ) {}
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const can = this.tokenStorage.getUser().type === USER_TYPES.admin;
    if (!can) {
      this.router.navigate(['/nonAuthorized']);
    }
    return can;
  }
}
