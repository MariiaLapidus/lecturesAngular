import { Component } from '@angular/core';
import {User} from '../models/UserModel';
import {UserService} from './services/user.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {
  msg = 'users';

 constructor() {}


}



