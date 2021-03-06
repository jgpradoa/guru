import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { LogInRoutingModule } from './router/login-routing.module';

import { LogInComponent } from './components/login.component';

import { UserService } from './services/user.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    LogInRoutingModule,
    HttpModule,
    MaterialModule.forRoot()
  ],
  declarations: [
    LogInComponent
  ],
  providers: [
    UserService
  ]
})
export class LogInModule {
}