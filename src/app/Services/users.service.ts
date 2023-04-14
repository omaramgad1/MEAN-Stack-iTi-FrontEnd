import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject, Observable, catchError, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  currentUser = new BehaviorSubject(null)


  constructor(private _http: HttpClient,
    private _CookieService: CookieService) {


  }

  register(user: any): Observable<any> {
    return this._http.post('http://localhost:3000/users/signup', user)
  }

  getUserBooks(): Observable<any> {
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

  loggedOut() {
    this._CookieService.delete('status')
  }

  logout() {
    return this._http.get('http://localhost:3000/users/logout', { withCredentials: true })

  }
}
