import { EventListenerFocusTrapInertStrategy } from '@angular/cdk/a11y';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  hide = true;
  loginForm = new FormGroup({
    email: new FormControl(null, [Validators.email, Validators.required]),
    password: new FormControl(null, [Validators.required]),



  })
  constructor(private _userService: UsersService, private router: Router) { }

  submintloginForm(loginForm: FormGroup) {
    this._userService.login(loginForm.value).subscribe((res) => {
      console.log("hello1");

      if (res.message === 'success') {
        this._userService.getProfile().subscribe((res) => {
          console.log(res['role']);


          if (res['role'] == 'admin') {
            this.router.navigate(['/admin'])
            console.log("hii")
          }
          else if (res['role'] == 'user')
            this.router.navigate(['/user'])
        })




      }
      else {
        alert("user not found")
      }


    }, (err) => console.log(err));
  }
}
