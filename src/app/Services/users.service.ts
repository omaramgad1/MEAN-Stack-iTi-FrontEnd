import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject, Observable, catchError, of, throwError } from 'rxjs';
import jwt_decode from "jwt-decode";

const baseUrl = 'https://backend-mean.onrender.com/';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  currentUser = new BehaviorSubject(null)


  constructor(private _http: HttpClient,
    private _CookieService: CookieService) {
    if (this._CookieService.check('jwt')) {
      this.savecurrentuser()

    }

  }

  register(user: any): Observable<any> {
    return this._http.post(`${baseUrl}users/signup`, user)
  }

  getUserBooks(pageNumber: number): Observable<any> {
    // pageNumber = pageNumber - 1
    return this._http.get(`${baseUrl}userBook?page=${pageNumber < 0 ? 0 : pageNumber}`)
  }

  getUserBooksByShelve(pageNumber: number, shelve: string): Observable<any> {
    // pageNumber = pageNumber - 1
    return this._http.get(`${baseUrl}userBook/${shelve}?page=${pageNumber < 0 ? 0 : pageNumber}`)
  }

  login(data: any): Observable<any> {

    return this._http.post(`${baseUrl}users/login`, data, {
      withCredentials: true
    })

  }
  updateShelve(bookId: string, shelve: string): Observable<any> {
    return this._http.patch(`${baseUrl}userBook/${bookId}`, { shelve })
  }

  updateUserBookRate(bookId: string, rate: number): Observable<any> {
    return this._http.patch(`${baseUrl}userBook/${bookId}`, { rate })
  }

  addBookToUser(bookId: string, data: any): Observable<any> {
    return this._http.patch(`${baseUrl}userBook/${bookId}`, {data})
  }
  /* 
    getProfile(): Observable<any> {
      return this._http.get(`${baseUrl}users/profile`)
    } */

  savecurrentuser() {
    const token = this._CookieService.get('jwt')
    let user: any = jwt_decode(token)
    this.currentUser.next(user);
  }

  logout() {
    this._CookieService.delete('jwt')
    this.currentUser.next(null);
    return this._http.get('https://backend-mean.onrender.com/users/logout')

  }

  getToken() {
    return this._CookieService.get('jwt')
  }


}
