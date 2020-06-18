import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { User } from '../user';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  userForm: FormGroup;

  constructor(private userService: UserService, private router: Router,private _snackBar: MatSnackBar) { }



  ngOnInit(): void {

    this.userForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ]),
      password: new FormControl('',  [
        Validators.required,
        Validators.minLength(8)
      ])
    });
  }

  get name() { return this.userForm.get('name'); }

  get password() { return this.userForm.get('password'); }

  addUser(){

   const user: User ={ID: 1, UserName: this.name.value, Password: this.password.value };
   let newUser;
   newUser = this.userService.addUser(user).subscribe( (u) => {
    newUser =u;
    },
    e =>  this. openSnackBar("Ocurrrio un error", "closed") 
     );

   if (newUser){
    this.gotoUsers(user);
   }
  }

  gotoUsers(user: User) {
    // Pass along the hero id if available
    // so that the HeroList component can select that hero.
    // Include a junk 'foo' property for fun.
    user['Operation']='added';

    this.router.navigate(['/users', user]);
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 40000,
    });
  }


}
