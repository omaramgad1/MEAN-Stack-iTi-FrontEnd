import { Component } from '@angular/core';
import { UsersService } from 'src/app/Services/users.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  name: string = '';
  photo: string = '';
<<<<<<< HEAD
  constructor(private _UserService: UsersService,
    private spinner: NgxSpinnerService,
    private router: Router) {

    const l: any = _UserService.currentUser.getValue()
=======
  constructor(private _userService: UsersService) {
    const l: any = _userService.currentUser.getValue()
>>>>>>> 37d9910674a71339e3d63b2facfd86524f453e8c
    l.firstName = l.firstName.charAt(0).toUpperCase() + l.firstName.slice(1);
    l.lastName = l.lastName.charAt(0).toUpperCase() + l.lastName.slice(1);
    this.name = l.firstName + ' ' + l.lastName;
    this.photo = l.photo;

    
  }
<<<<<<< HEAD
  logout(): void {
    this.spinner.show();

    this._UserService.logout().subscribe((res) => {
      console.log("bye");

      this._UserService.currentUser.next(null)
      setTimeout(() => {
        this.router.navigate(['/endless_books/home'])
        this.spinner.hide();
      }, 1000);


    }, (err) => {
      console.log("error")
      console.log(err.message)

      this.spinner.hide();

    }
    )

  }
  
=======

  logout(): void {
    this._userService.logout().subscribe((res) => {
      console.log("bye");

    }, (err) => console.log("error")
    )
  }
>>>>>>> 37d9910674a71339e3d63b2facfd86524f453e8c
}
