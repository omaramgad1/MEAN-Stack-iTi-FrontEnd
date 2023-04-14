import { CookieService } from 'ngx-cookie-service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree, RouterModule } from '@angular/router';
import { UsersService } from '../Services/users.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class HomeGuardGuard implements CanActivate {




  constructor(private _UsersService: UsersService, private _router: Router,
    private spinner: NgxSpinnerService, private _CookieService: CookieService) {
  }

  async canActivate(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
    this.spinner.show()


    if (!this._CookieService.check('status')) {
      this.spinner.hide();

      return true
    }
    try {


      const response = await this._UsersService.getProfile().toPromise()


      setTimeout(() => {

        if (response.role === 'admin') {
          this.spinner.hide();

          this._router.navigate(['/admin']);

        }
        else if (response.role === 'user') {
          this._router.navigate(['/user']);
          this.spinner.hide();


        }

      }, 1000)

      return false
    } catch (error: any) {


      this.spinner.hide();

      return true;
    }
  }

}
