import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UsersService } from '../Services/users.service';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  isLogged: boolean = false;

  constructor(private _UsersService: UsersService, private _router: Router, private _CookieService: CookieService) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    //this._CookieService.check('currentUser') && JSON.parse(this._CookieService.get('currentUser')) !== null
    if (this._UsersService.currentUser.getValue() != null) {
      return true;
    }

    else {
      this._router.navigate(['/auth/login']);
      return false;
    }

  }

} 
