import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {
  private loggedIn: boolean = false;
  private userUrl = 'http://localhost:8081/api/auth';  // URL to web api

  constructor(private http: Http) { }

  logIn(userName: String, pass: String): Promise<boolean>{
    return this.post(userName, pass);
  }

  // Update existing Hero
  private post(userName: String, pass: String): Promise<boolean> {
    let headers = new Headers({
      'Content-Type': 'application/json'
    });

    var user = {user: userName, psw: pass};

    return this.http
      .post(this.userUrl + "/login", JSON.stringify(user), { headers: headers })
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  logOut(){

    localStorage.removeItem('auth_token');
  }
}