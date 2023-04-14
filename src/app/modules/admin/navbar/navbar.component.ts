import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  title!: string;
  constructor(private _userService: UsersService,
    private spinner: NgxSpinnerService,
    private router: Router,) {
    this._userService.getProfile().subscribe(user => {
      this.title = user.firstName + " " + user.lastName;

    })

  }

  logout(): void {
    this.spinner.show();

    this._userService.logout().subscribe((res) => {

      this._userService.loggedOut()
      this._userService.currentUser.next(null)

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
