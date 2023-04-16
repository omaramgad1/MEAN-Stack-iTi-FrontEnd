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
    const user: any = this._userService.currentUser.getValue();

    this.title = user.firstName + " " + user.lastName;


  }

  logout(): void {
    this.spinner.show();

    this._userService.logout().subscribe((res) => {


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
