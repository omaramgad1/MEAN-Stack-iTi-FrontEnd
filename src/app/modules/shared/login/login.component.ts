import { EventListenerFocusTrapInertStrategy } from '@angular/cdk/a11y';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Emitters } from 'src/app/Services/emitters';
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

      if (res.message == 'success') {
        Emitters.authEmitter.emit(true)
        this._userService.getProfile().subscribe((res) => {

          this._userService.setCurrentUser(res)

          if (res['role'] == 'admin') {
            this.router.navigate(['/admin'])
          }
          else if (res['role'] == 'user')
            this.router.navigate(['/user'])
        })
      }
      else if (res.message == 'error') {

        alert("user not found")
      }


    }, (err) => {

      console.log(err)
    }
    )
  }
}
