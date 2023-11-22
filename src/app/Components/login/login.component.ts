import { Component } from '@angular/core';
import { User } from 'src/app/Models/UserModel';
import { UserService } from 'src/app/Services/user-service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private userService: UserService) {}

  title = 'Login Component';
  users: User[] = [];

  ngOnInit(): void {
    this.users = this.userService.getUser();
    console.log(this.users);
  }
}
