import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  Login(request: any) {
    return this.http.post<any>('https://localhost:44320/api/auth/login', request);
  }
}
