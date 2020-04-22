import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import { UserComponent } from './user/user.component';
import { HelloComponent } from './hello/hello.component';
import { AllUsersComponent } from './all-users/all-users.component';
import { UserResolverService } from './services/user-resolver.service';
import { PostComponent } from './post/post.component';
import { AllPostComponent } from './all-post/all-post.component';


const routes: Routes = [
  {path: '' , component: HelloComponent},
  {path: 'users' , component: AllUsersComponent, resolve: {allUsers: UserResolverService}, children: [
      {path:':id/posts', component: AllPostComponent}
    ]}
]

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HelloComponent,
    AllUsersComponent,
    PostComponent,
    AllPostComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
