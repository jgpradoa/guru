import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';

import {Observable} from 'rxjs/Observable';

//TODO add angular2-jwt

@Injectable()
export class UserService {
  private loggedIn: boolean = false;
  private userUrl = 'http://localhost:8081/api/auth';  // URL to web api

  constructor(private http: Http) { }

  logIn(userName: String, pass: String): Observable<boolean>{
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    let options = new RequestOptions({ headers: headers });
    var user = {email: userName, password: pass};
    localStorage.removeItem('auth_t');
    return this.http
      .post(this.userUrl + "/login", JSON.stringify(user), options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    console.log("token: " + body.token);
    console.log("bro: " + body.brother);
    localStorage.setItem('auth_t', body.token);
    return true;
  }

  private handleError(error: any): Promise<any> {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    return Promise.reject(errMsg);
  }

  logOut(){

    localStorage.removeItem('auth_token');
  }
}