import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateChild,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { USER_TYPES } from 'src/app/core/enums';
import { TokenStorageService } from 'src/app/core/services/token-storage.service';

@Injectable({
  providedIn: 'root',
})
export class BusinessGuard implements CanActivateChild {
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
    const can = this.tokenStorage.getUser().type === USER_TYPES.seller;
    if (!can) {
      this.router.navigate(['/nonAuthorized']);
    }
    return can;
  }
}
