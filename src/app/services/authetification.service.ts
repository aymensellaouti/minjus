import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
const AUTHENTIFICATION_LINK = 'https://immense-citadel-91115.herokuapp.com/api/Users/login';
@Injectable({
  providedIn: 'root'
})
export class AuthetificationService {

  constructor(
    private http: HttpClient
  ) { }
  isAuthenticated() {
    return !!localStorage.getItem('token');
  }
  login(credentials) {
    return this.http.post(AUTHENTIFICATION_LINK, credentials);
  }
  logout() {
    localStorage.removeItem('token');
  }
}
