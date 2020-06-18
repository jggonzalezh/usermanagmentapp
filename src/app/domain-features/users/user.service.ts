import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

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

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.userUrl);
  }

  getUser(id: string): Observable<User> {
    return this.http.get<User>(`${this.userUrl}/${id}`);
  }

  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.userUrl, user , httpOptions).pipe(
      map( (u) => u as User)
    );
  }

  deleteUser(id: string){
    const url = `${this.userUrl}/${id}`;
    return this.http.delete(url, httpOptions);
  }

}
