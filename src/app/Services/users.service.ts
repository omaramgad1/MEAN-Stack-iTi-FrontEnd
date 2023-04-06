import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Emitters } from './emitters';
import jwtDecode from 'jwt-decode';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  role = new BehaviorSubject({})
  currentUser = new BehaviorSubject(null)
  constructor(private _http: HttpClient, private _cookieService: CookieService) { }


  saveCurrentUser() {
    const token = this._cookieService.get('jwt')
    this.currentUser.next(jwtDecode(token))
  }
  register(user: any): Observable<any> {
    return this._http.post('http://localhost:3000/users/signup', user)
  }

  login(data: any): Observable<any> {

    return this._http.post('http://localhost:3000/users/login', data, {
      withCredentials: true
    })

  }

  getProfile(): Observable<any> {

    return this._http.get('http://localhost:3000/users/profile', { withCredentials: true })


  }
  getuser(): any {

    return this.currentUser.getValue()
  }

  logout() {

  }

}
