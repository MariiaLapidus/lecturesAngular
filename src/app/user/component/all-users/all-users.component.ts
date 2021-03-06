import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {ActivatedRoute} from '@angular/router';
import { User } from 'src/models/UserModel';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {
  users: User[];
  xxx: any;

  constructor(private activatedRoute: ActivatedRoute) {
    console.log(this.activatedRoute.snapshot.data);
    this.users = this.activatedRoute.snapshot.data.allUsers;
  }

  ngOnInit(): void {
  }

  catchUserData($event: any) {
    console.log($event);
    this.xxx = $event;
  }
}
