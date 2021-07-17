import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(
    public http: HttpClient,
  ) { }

  readUsers(){
    return this.http
      .get('http://127.0.0.1:8000/api/users');
  }
}
