import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  
  currentUser = new BehaviorSubject(null)

  constructor(private _http: HttpClient) {
  }

  register(user: any): Observable<any> {
    return this._http.post('http://localhost:3000/users/signup', user)
  }

  getUserBooks(pageNumber: number): Observable<any> {
    pageNumber = pageNumber - 1
    return this._http.get('http://localhost:3000/users/books?pageNumber=${pageNumber < 0 ? 0 : pageNumber}', { withCredentials: true })
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
    return this._http.get('http://localhost:3000/users/logout', { withCredentials: true })

  }
}
