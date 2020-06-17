import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

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

  getUsers (): Observable<User[]> {
    return this.http.get<User[]>(this.userUrl)
  }

}
