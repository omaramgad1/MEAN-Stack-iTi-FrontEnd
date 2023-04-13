import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, async, map } from 'rxjs';
import { UsersService } from '../Services/users.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  isLogged: boolean = false;

  constructor(private _UsersService: UsersService, private _router: Router) {
  }

  async canActivate(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
    const allowedRoles = route.data['allowedRoles'];

    try {
      const response = await this._UsersService.getProfile().toPromise()
      this._UsersService.currentUser.next(response)
      return true;
    } catch (error) {
      this._router.navigate(['/endless_books/login']);
      return false;
    }
  }

} 
