import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AllUsersComponent} from './component/all-users/all-users.component';
import {UserResolverService} from './services/user-resolver.service';
import {UserComponent} from './component/user/user.component';


const routes: Routes = [
  {
    path: '' ,
    component: AllUsersComponent,
    resolve: {allUsers: UserResolverService},
    children: [
      {
        path: ':id',
        component: UserComponent,
        loadChildren: () => import('../post/post.module').then(m => m.PostModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
