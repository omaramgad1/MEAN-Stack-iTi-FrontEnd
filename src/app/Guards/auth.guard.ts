import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, async, map } from 'rxjs';
import { UsersService } from '../Services/users.service';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  isLogged: boolean = false;

  constructor(private _UsersService: UsersService, private _router: Router, private _CookieService: CookieService) {
  }

  async canActivate(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
    try {
      const response = await this._UsersService.getProfile().toPromise()
      this._UsersService.setCurrentUser(response)
      // Do something with the response
      return true;
    } catch (error) {
      alert("error")
      this._router.navigate(['/auth/login']);
      return false;
    }
  }

} 
