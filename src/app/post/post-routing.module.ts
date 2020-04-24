import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AllPostComponent} from './components/all-post/all-post.component';
import {PostResolveService} from './services/post-resolver.service';


const routes: Routes = [
  {path: '', component: AllPostComponent, children: [
      {path: 'posts', component: AllPostComponent, resolve: {xxx: PostResolveService}}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
