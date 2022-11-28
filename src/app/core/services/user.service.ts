import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../interfaces';

const API_URL = environment.backendURL + 'user/';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getuser(): Observable<any> {
    return this.http.get(API_URL, {
      responseType: 'text',
      params: { id: '1' },
    });
  }

  updateUser(user: User): Observable<any> {
    return this.http.patch(API_URL + 'user', user, {
      responseType: 'text',
      params: { id: '1' },
    });
  }

  deleteUser(): Observable<any> {
    return this.http.patch(API_URL + 'remove', {
      responseType: 'text',
      params: { id: '1' },
    });
  }
}
