import { Component } from '@angular/core';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  title!: string;
  constructor(private _userService: UsersService) {
    this._userService.getProfile().subscribe(user => {
      this.title = user.firstName + " " + user.lastName;

    })

  }
}
