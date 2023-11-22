import { Injectable } from '@angular/core';
import { User } from '../Models/UserModel';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}
  public getUser(): User[] {
    let user = new User();
    user.id = 2;
    user.firstName = '';
    user.lastName = '';
    user.password = '';
    return [user];
  }
}
