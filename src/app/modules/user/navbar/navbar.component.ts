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
  constructor(private _UserService: UsersService,
    private spinner: NgxSpinnerService,
    private router: Router) {

    const user: any = _UserService.currentUser.getValue()
    user.firstName = user.firstName.charAt(0).toUpperCase() + user.firstName.slice(1);
    user.lastName = user.lastName.charAt(0).toUpperCase() + user.lastName.slice(1);
    this.name = user.firstName + ' ' + user.lastName;
    this.photo = user.photo;


  }
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

}
