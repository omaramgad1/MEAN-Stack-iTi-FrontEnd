import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import jwt_decode from "jwt-decode";

import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  passwordVisible = false;

  hide = true;
  loginForm = new FormGroup({
    email: new FormControl(null, [Validators.email, Validators.required]),
    password: new FormControl(null, [Validators.required]),
  })
  constructor(private _userService: UsersService,
    private router: Router,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
    private _CookieService: CookieService) { }

  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }
  get m() {
    return this.loginForm.controls;
  }
  submintloginForm(loginForm: FormGroup) {
    this.spinner.show();

    this._userService.login(loginForm.value).subscribe((res) => {

      if (res.message === 'success') {
        this._CookieService.deleteAll();
        this._CookieService.set('jwt', res.token);
        let user: any = jwt_decode(res.token);
        this._userService.savecurrentuser();

        setTimeout(() => {
          if (user['role'] == 'admin') {

            this.toastr.success(user['firstName'], 'Welcome Back ');

            this.router.navigate(['/admin'])
            this.spinner.hide();
          }
          else if (user['role'] == 'user') {


            this.toastr.success(user['firstName'], 'Welcome Back ');

            this.router.navigate(['/user'])
            this.spinner.hide();
          }

        }, 2000);


      }
    }, (err) => {
      this.toastr.error('Error', err.error.message);
      this.spinner.hide();

    }
    ), (err: any) => {
      this.toastr.error('Error', err.error.message);
      this.spinner.hide();

    }
  }
}


