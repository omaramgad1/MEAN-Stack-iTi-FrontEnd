import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree, RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { UsersService } from '../Services/users.service';

@Injectable({
  providedIn: 'root'
})
export class HomeGuardGuard implements CanActivate {
  constructor(private _UsersService: UsersService, private _router: Router) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const user: any = this._UsersService.currentUser.getValue()




    if (this._UsersService.currentUser.getValue() != null) {

      return false;

    }
    else {
      return true;
    }

  }
}