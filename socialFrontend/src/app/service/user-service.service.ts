
import { Injectable } from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import {Observable} from 'rxjs';
import {User} from '../model/users/user';

@Injectable()
export class UserServiceService {

  user: any;
  baseUrl: string = "http://localhost:8080";

  constructor(private http: Http) {
    this.user = new User();
  }

  signup(user: User): Observable<Response> {
    console.log("sono nell'userSercice")
    this.user.setUser(user.getUser());
    this.user.setPwd(user.getPwd());
    console.log("user:", this.user);
    return this.http.post(this.baseUrl+'/signup', user , { headers: this.getHeaders() });
  }

  private getHeaders() {
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
    return headers;
  }
}
