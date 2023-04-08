import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Emitters } from './emitters';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  currentUser = new BehaviorSubject(null)

  constructor(private _http: HttpClient, private _cookieService: CookieService) {
  }

  register(user: any): Observable<any> {
    return this._http.post('http://localhost:3000/users/signup', user)
  }

  getUserBooks(): Observable<any>{
    return this._http.get('http://localhost:3000/users/books/', { withCredentials: true })
  }

  login(data: any): Observable<any> {

    return this._http.post('http://localhost:3000/users/login', data, {
      withCredentials: true
    })

  }

  getProfile(): Observable<any> {
    return this._http.get('http://localhost:3000/users/profile', { withCredentials: true })
  }

  setCurrentUser(obj: any) {
    this.currentUser.next(obj)
  }


  logout() {

  }
}
