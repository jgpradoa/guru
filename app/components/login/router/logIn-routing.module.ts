import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';

import { LogInComponent } from '../components/login.component';
//Todo: create and add to router
//import { ForgotPassComponent } from '../components/forgotpass.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'login', component: LogInComponent }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class LogInRoutingModule {}