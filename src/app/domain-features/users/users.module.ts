import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

import { UsersRoutingModule } from './users-routing.module';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailViewComponent } from './user-detail-view/user-detail-view.component';
import { AddUserComponent } from './add-user/add-user.component';



@NgModule({
  declarations: [UserListComponent, UserDetailViewComponent, AddUserComponent],
  imports: [
    SharedModule,
    UsersRoutingModule,
  ]
})
export class UsersModule { }
