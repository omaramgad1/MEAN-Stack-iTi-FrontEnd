import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UsersService } from '../Services/users.service';

@Injectable({
    providedIn: 'root'
})
export class RoleGuard implements CanActivate {

    isLogged: boolean = false;

    constructor(private _UsersService: UsersService, private _router: Router) {
    }

    async canActivate(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot) {
        const allowedRoles = route.data['allowedRoles'];

        try {
            const response = await this._UsersService.getProfile().toPromise()
            if (allowedRoles.includes(response.role)) {
                return true;
            }
            else {
                this._router.navigate(['/auth/login']);
                return false;
            }
        } catch (error) {
            this._router.navigate(['/auth/login']);
            return false;
        }
    }

} 
