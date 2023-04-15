import { MatProgressBarModule } from '@angular/material/progress-bar';
import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter } from '@angular/core';
import { AbstractControl, EmailValidator, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  hideConfirm: boolean = true;
  hide: boolean = true;
  up: boolean = false;
  passwordVisible = false;
  file: any;
  registerForm = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]),
    lastName: new FormControl('', [Validators.required, Validators.maxLength(15), Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    photo: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(4)]),
    confirmPassword: new FormControl('', [Validators.required]),
  }
    ,
    [CustomValidators.MatchValidator('password', 'confirmPassword')])


  constructor(private http: HttpClient,
    private _userService: UsersService,
    private router: Router) {

  }


  onFileSelect(event: any) {
    this.file = event.target.files
  };
  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }
  onSubmit(registerForm: FormGroup) {
    const formData = new FormData();
    formData.append('firstName', registerForm.get('firstName')?.value);
    formData.append('lastName', registerForm.get('lastName')?.value);
    formData.append('email', registerForm.get('email')?.value);
    formData.append('photo', this.file[0]);
    formData.append('password', registerForm.get('password')?.value);
    formData.append('confirmPassword', registerForm.get('confirmPassword')?.value);


    this._userService.register(formData).subscribe({
      next: (res) => {
        if (res.message == 'success')
          this.router.navigate(['/endless_books/login'])
        else
          alert(res.message)
      },
      error: (err) => console.log(err)

    })

  };


  get passwordMatchError() {
    return (
      this.registerForm.getError('mismatch') &&
      this.registerForm.get('confirmPassword')?.touched
    );
  }

  get m() {
    return this.registerForm.controls;
  }

}


export class CustomValidators {
  static MatchValidator(source: string, target: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const sourceCtrl = control.get(source);
      const targetCtrl = control.get(target);

      return sourceCtrl && targetCtrl && sourceCtrl.value !== targetCtrl.value
        ? { mismatch: true }
        : null;
    };
  }

}
