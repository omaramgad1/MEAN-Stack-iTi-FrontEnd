import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UsersService } from '../Services/users.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  constructor(private _router: Router, private _UsersService: UsersService) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const user: any = this._UsersService.currentUser.getValue();
    const allowedRoles = route.data['allowedRoles'];

    if (allowedRoles.includes(user.role)) {
      return true;
    }
    else {
      this._router.navigate(['/endless_books/login']);
      return false;
    }

  }

}
