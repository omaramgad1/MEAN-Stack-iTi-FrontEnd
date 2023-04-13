import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree, RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { UsersService } from '../Services/users.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { MatCardLgImage } from '@angular/material/card';

@Injectable({
  providedIn: 'root'
})
export class HomeGuardGuard implements CanActivate {




  constructor(private _UsersService: UsersService, private _router: Router,
    private spinner: NgxSpinnerService) {
  }

  async canActivate(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
    this.spinner.show()

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
    } catch (error) {
      this.spinner.hide();

      // this._router.navigate(['/endless_books/login']);
      return true;
    }
  }
}
  /* constructor(private _UsersService: UsersService, private _router: Router,
private spinner: NgxSpinnerService) {

}
canActivate(
route: ActivatedRouteSnapshot,
state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

const user: any = this._UsersService.currentUser.getValue()

console.log(user);

this.spinner.show()

if (this._UsersService.currentUser.getValue() != null) {
console.log("role if");

// setTimeout(() => {
if (user.role === 'admin') {

this._router.navigate(['/admin']);
this.spinner.hide()

}
else if (user.role === 'user') {
this._router.navigate(['/user']);
this.spinner.hide()if (user.role === 'admin') {

this._router.navigate(['/admin']);
this.spinner.hide()

}
else if (user.role === 'user') {
this._router.navigate(['/user']);
this.spinner.hide()



}
// }, 1000)
return false;

}
else {
this.spinner.hide()

return true;
}

} */
