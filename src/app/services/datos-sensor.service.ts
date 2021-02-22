import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Dato } from '../models/dato';
@Injectable({
  providedIn: 'root'
})
export class DatosSensorService {

  // urlBase = 'http://localhost:3000/api';
  urlBase = 'https://proyectosensorcebem.herokuapp.com/api';
  constructor(private httpClient: HttpClient) { }

  getListaDatos(): Observable<Dato[]> {
    const url = this.urlBase + '/dato';
    return this.httpClient.get<Dato[]>(url);
  }

  getDatoById(id: string): Observable<Dato> {
    const url = this.urlBase + '/dato/' + id;
    return this.httpClient.get<Dato>(url);
  }

  getUltimoDato(): Observable<any> {
    const token = localStorage.getItem('auth-token') || '';
    const url = this.urlBase + '/dato/ultimoDato';
    const headers = { 'auth-token': token };
    return this.httpClient.get(url, { headers });
  }

  removeDato(id: string): Observable<any>{
    const url = this.urlBase + '/dato/' + id;
    return this.httpClient.delete(url);
  }

  addDato(dato: Dato): Observable<any> {
    const body = JSON.stringify(dato);
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = this.urlBase + '/dato/';
    return this.httpClient.post(url, body, { headers });
  }

  updateDato(id: string, dato: Dato): Observable<any> {
    const body = JSON.stringify(dato);
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = this.urlBase + '/dato/' + id;
    return this.httpClient.put(url, body, { headers });
  }

}
