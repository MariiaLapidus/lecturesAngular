import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { PostsService } from './posts.service';
import {PostsModel} from '../../../models/PostModel';

@Injectable({
  providedIn: 'root'
})
export class PostResolveService implements Resolve<PostsModel[]> {

  constructor(private postService: PostsService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<PostsModel[]> | Promise<PostsModel[]> | PostsModel[] {
    const id = route.queryParamMap.get('idOfUser');
    console.log(id);
    if (id) {
      return this.postService.getPostsOfUserById(+id);
    } else {
      return this.postService.getPosts();
    }
  }
}
