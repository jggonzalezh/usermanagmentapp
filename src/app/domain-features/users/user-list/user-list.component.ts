import { Component, OnInit, AfterViewChecked,ChangeDetectorRef } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user';
import { UserService} from '../user.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit, AfterViewChecked {
  users$: Observable<User[]>;

  UserId: number;
  UserName: string;
  UserPassword: string;
  userOperation :string;

  constructor(private userService: UserService, private route: ActivatedRoute,private changeDetector: ChangeDetectorRef,private _snackBar: MatSnackBar) { }

  ngOnInit() {

    this.users$ = this.route.paramMap.pipe(
      switchMap(params => {
        // (+) before `params.get()` turns the string into a number
        this.UserId = +params.get('ID');
        this.UserName = params.get('UserName');
        this.UserPassword = params.get('Password');
        this.userOperation =params.get('Operation');

        if(this.userOperation){
          this.openSnackBar( 'User has been'+this.userOperation, 'close');
        }

        

        return this.userService.getUsers();
      })

    );
  }

  ngAfterViewChecked(){
    this.changeDetector.detectChanges();
  }


  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 40000,
    });
  }

}
