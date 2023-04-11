import { Component } from '@angular/core';
import { UsersService } from 'src/app/Services/users.service';
UsersService
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  title!: string;
  constructor(private _userService: UsersService) {




  }


}
