import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UsersService } from '../Services/users.service';

@Injectable({
  providedIn: 'root'
})
export class HomeGuard implements CanActivate {
  constructor(private _router: Router, private _UsersService: UsersService) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {


    const user: any = this._UsersService.currentUser.getValue();
    if (this._UsersService.currentUser.getValue() != null) {

      if (user.role == 'admin') {
        this._router.navigate(['/admin']);
      }
      else if (user.role == 'user') {
        this._router.navigate(['/user']);


      }
      return false;
    }
    else {
      return true;
    }
  }
}

