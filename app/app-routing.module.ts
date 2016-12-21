import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';

import { UserActivate } from './guards/user.guard';

import { HomeComponent } from './components/home/home.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', component: HomeComponent, canActivate: [UserActivate]}
    ])
  ],
  providers: [
    UserActivate
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}