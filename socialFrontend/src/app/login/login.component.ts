import { Component } from '@angular/core';
import { Md5 } from 'ts-md5/dist/md5';
import {UserServiceService} from '../service/user-service.service';
import { User } from '../model/users/user';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  user: any;

  username: string = "ciaone";
  constructor(private userService: UserServiceService) {
  }

  login(event, user: string, pwd: string): void {
    console.log("sono nell'userComponent");
    console.log("login", user, pwd);
    document.cookie = "username=" + Md5.hashStr(this.username);
    this.user = new User();
    this.user.setUser(user);
    this.user.setPwd(pwd);
    console.log(this.user);
    this.userService.signup(this.user).subscribe();
  }


}
