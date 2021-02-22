import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // urlBase = 'http://localhost:3000/api';
  urlBase = 'https://proyectosensorcebem.herokuapp.com/api';
  constructor(private httpClient: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    const body = JSON.stringify({ email, password });
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    const url = this.urlBase + '/auth/login';
    return this.httpClient.post(url, body, { headers });
  }

  register(user: User): Observable<any> {
    const body = JSON.stringify(user);
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = this.urlBase + '/auth/singup';
    return this.httpClient.post(url, body, { headers });
  }
}
