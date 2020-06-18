import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailViewComponent } from './user-detail-view/user-detail-view.component';
import { AddUserComponent } from './add-user/add-user.component';

const routes: Routes = [
  { path: 'users',  component: UserListComponent },
  { path: 'user/:id', component: UserDetailViewComponent},
  { path: 'users/add', component: AddUserComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
