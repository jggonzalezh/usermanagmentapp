import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap,filter } from 'rxjs/operators';
import { of } from 'rxjs';

import { User} from './user';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userUrl = 'https://fakerestapi.azurewebsites.net/api/Users';

  constructor(private http: HttpClient) {}


  lastOperation: string;
  userLastoperation: User ;

  getUsers(): Observable<User[]> {

    if( !this.lastOperation  ){
      // regular  call
      return this.http.get<User[]>(this.userUrl);

    } else {
       // Call to simulate adding or deleting a user
       // due to add and delete user will not reflect in user GET API 
      if(this.lastOperation ==="DELETE"){
        return this.http.get<User[]>(this.userUrl).pipe(
          map( users =>{
            let r = users.filter(u => u['ID'] !== this.userLastoperation['ID']); 
            this.lastOperation = undefined;
            this.userLastoperation = undefined;
            return r;
          }
         )
         ); 
      } else {
        return this.http.get<User[]>(this.userUrl).pipe(
          filter( users => {
            users.push(this.userLastoperation);
            this.lastOperation = undefined;
            this.userLastoperation = undefined;
            return users.length > 0;
          }  )
        )
       }
    }
  }

  getUser(id: string): Observable<User> {
      return this.http.get<User>(`${this.userUrl}/${id}`);
  }

  addUser(user: User): Observable<User> {
    this.lastOperation = 'ADD';
    this.userLastoperation = user;
    return this.http.post<User>(this.userUrl, user , httpOptions).pipe(
      map( (u) => u as User)
    );
  }

  deleteUser(user: User){
    this.lastOperation = 'DELETE';
    this.userLastoperation = user;
    const url = `${this.userUrl}/${user.ID.toString()}`;
    return this.http.delete(url, httpOptions);
  }

}
