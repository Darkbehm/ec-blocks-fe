import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const AUTH_API = environment.backendURL + 'auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login({ email, password }: loginUSer): Observable<any> {
    return this.http.post(
      AUTH_API + 'login',
      {
        email,
        password,
      },
      httpOptions,
    );
  }

  register({ name, email, password, type }: registerUser): Observable<any> {
    return this.http.post(
      AUTH_API + 'register',
      {
        name,
        email,
        password,
        type,
      },
      httpOptions,
    );
  }
}

type registerUser = {
  name: string;
  email: string;
  password: string;
  type: string;
};

type loginUSer = {
  email: string;
  password: string;
};
