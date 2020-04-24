import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import {PostComponent} from './components/post/post.component';
import {AllPostComponent} from './components/all-post/all-post.component';


@NgModule({
  declarations: [
    PostComponent,
    AllPostComponent
  ],
  imports: [
    CommonModule,
    PostRoutingModule
  ]
})
export class PostModule { }
