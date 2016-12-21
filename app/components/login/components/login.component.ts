import { Component, ViewChild, OnInit  } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { UserService } from '../services/user.service';

//to display error msgs
import {AlertComponent } from 'ng2-bootstrap/ng2-bootstrap';

import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'log-in',
  templateUrl: '../app/components/login/components/login.component.html',
  styleUrls: ['../app/components/login/components/login.component.css']
})
export class LogInComponent implements OnInit {
  @ViewChild('userInput') user: any;
  model: any= { email: '', psw: '' };
  userError: String = "";
  passError: String = "";
  err_msg: String = "";
  loading: Boolean = false;

	constructor(private route: ActivatedRoute,
    			private router: Router,
    			private loginService: UserService){

	}

  ngOnInit() {
    this.user.focus();
  }

  //call service and make service validate the inputs
  logIn(event: any) {
  	console.log("clicked log in");
  	event.preventDefault();
    let userInput: String = this.model.email;
    let passInput: String = this.model.psw;
    if(userInput == ""){
      this.userError = "please enter username";
    }
    else
      this.userError = "";

    if(passInput == ""){
      this.passError = "please enter password";
    }
    else
      this.passError = "";

    console.log("username " + userInput + "passw: " + passInput);

    if(userInput != "" && passInput != ""){
      //change to observable
      this.loading = true;
      this.loginService.logIn(userInput,passInput).subscribe(auth =>{
                                                                      this.loading = false;
                                                                      if(auth){  
                                                                        this.err_msg = "";
                                                                        //this.router.navigate(['/']);
                                                                      }else{
                                                                         this.err_msg = "Wrong user or password";
                                                                      }
                                                                    },
                                                              error => {
                                                                this.loading = false;
                                                                this.err_msg = "Wrong user or password";
                                                                console.log("Error " + this.err_msg);
                                                              });
    }
  }

}