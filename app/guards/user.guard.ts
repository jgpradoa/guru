import { Injectable } from '@angular/core';
import { CanActivate, 
		 ActivatedRouteSnapshot,
  		 RouterStateSnapshot,
  		 Router } from '@angular/router';

//Todo: add user service
//import { UserService } from '../services/user.service';


@Injectable()
export class UserActivate implements CanActivate {

  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {

  	//check if he is logged in using the service

  	//if auth is false redirect to login
  	this.router.navigate(['/login']);
    return false;
  }
}