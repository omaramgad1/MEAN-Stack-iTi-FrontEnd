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
    if (this._cookieService.check('currentUser') && JSON.parse(this._cookieService.get('currentUser')) !== null && this.currentUser.getValue() == null) {
      this.saveCurrentUser()
    }

    /*     if (this.currentUser.getValue == null) {
          this.saveCurrentUser()
        } */
  }

  register(user: any): Observable<any> {
    return this._http.post('http://localhost:3000/users/signup', user)
  }

  login(data: any): Observable<any> {

    return this._http.post('http://localhost:3000/users/login', data, {
      withCredentials: true
    })

  }

  saveCurrentUser() {

    this.currentUser.next(JSON.parse(this._cookieService.get('currentUser')))

  }

  /*   saveCurrentUser() {
      return this._http.get('http://localhost:3000/users/profile', { withCredentials: true }).subscribe((data: any) => {
        this.currentUser.next(data)
  
  
      })
  
  
    }
   */



  getProfile(): Observable<any> {
    return this._http.get('http://localhost:3000/users/profile', { withCredentials: true })
  }

  setToCookie(obj: any) {
    this.currentUser.next(obj)
    this._cookieService.set('currentUser', JSON.stringify(obj));
  }

  /*   setCurrent(obj: any) {
      this.currentUser.next(obj)
    }
   */

  logout() {

  }
}
