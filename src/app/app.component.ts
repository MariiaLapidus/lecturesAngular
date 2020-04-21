import { Component } from '@angular/core';
import {User} from '../models/user/user.module';
import {UserService} from './services/user.service';




@Component({
  selector: 'app-root',
  template: `<app-user *ngFor="let user of users" [user]="user"></app-user>`,
  styleUrls: ['./app.component.css']

})
export class AppComponent {
  msg = 'users';
  users: User[];

 constructor(private userServices: UserService) {
   this.userServices.getUsers().subscribe(value => this.users = value);

 }


}



