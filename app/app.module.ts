import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent }  from './app.component';
//material
import {MaterialModule} from '@angular/material';
//logIN
import {LogInModule} from './components/login/logIn.module';

//Components
//Home
import { HomeComponent } from './components/home/home.component';

@NgModule({
	imports: [ 
		BrowserModule,
		FormsModule,
		AppRoutingModule,
		HttpModule,
		MaterialModule.forRoot(),
		LogInModule
  	],
	declarations: [
		AppComponent,
		HomeComponent
	],
	bootstrap:    [ AppComponent ]
})
export class AppModule { }