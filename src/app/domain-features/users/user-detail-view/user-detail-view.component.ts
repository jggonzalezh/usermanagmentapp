import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-detail-view',
  templateUrl: './user-detail-view.component.html',
  styleUrls: ['./user-detail-view.component.scss']
})
export class UserDetailViewComponent implements OnInit {
  user$: Observable<User>;


  constructor(private userService: UserService ,  private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    this.user$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.userService.getUser(params.get('id')))
    );
  }

  deleteUser(user: User){
    this.userService.deleteUser( user.ID.toString() ).subscribe( c => { console.log(c); this.gotoUsers(user) });
  }


  gotoUsers(user: User) {
    // Pass along the hero id if available
    // so that the HeroList component can select that hero.
    // Include a junk 'foo' property for fun.
    user['Operation'] = 'deleted';

    this.router.navigate(['/users', user]);
  }

}
