import { Component, OnInit } from '@angular/core';
import {PostsService} from '../../services/posts.service';
import {ActivatedRoute, Router} from '@angular/router';
import {PostsModel} from '../../../../models/PostModel';

@Component({
  selector: 'app-all-post',
  templateUrl: './all-post.component.html',
  styleUrls: ['./all-post.component.css']
})
export class AllPostComponent implements OnInit {
  posts: PostsModel[];

  constructor(private postService: PostsService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute
      .params
      .subscribe(params => this.postService
          .getPostsOfUserById(params.id)
      .subscribe(postsFromService => this.posts = postsFromService));
    // this.activatedRoute.queryParams.subscribe(queryParams => this.postService
    //   .getPostsOfUserById(queryParams.idOfUser).subscribe(value => console.log(value)));
    // this.postService.getPostsOfUserById(this.router.getCurrentNavigation().extras.state.user)
    //   .subscribe(value => console.log(value));
  }

  ngOnInit(): void {
  }

}
