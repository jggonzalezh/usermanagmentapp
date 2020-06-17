import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UsersRoutingModule } from './users-routing.module';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailViewComponent } from './user-detail-view/user-detail-view.component';
import { AddUserComponent } from './add-user/add-user.component';


@NgModule({
  declarations: [UserListComponent, UserDetailViewComponent, AddUserComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
