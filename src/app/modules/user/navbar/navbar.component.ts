import { Component } from '@angular/core';
import { UsersService } from 'src/app/Services/users.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  name: string = '';
  photo: string = '';
  constructor(_UserService: UsersService) {
    const l: any = _UserService.currentUser.getValue()
    l.firstName = l.firstName.charAt(0).toUpperCase() + l.firstName.slice(1);
    l.lastName = l.lastName.charAt(0).toUpperCase() + l.lastName.slice(1);
    this.name = l.firstName + ' ' + l.lastName;
    this.photo = l.photo;
  }
}
