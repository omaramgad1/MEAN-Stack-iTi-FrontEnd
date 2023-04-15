import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject, Observable, catchError, of, throwError } from 'rxjs';

const baseUrl = 'https://backend-mean.onrender.com/';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  currentUser = new BehaviorSubject(null)


  constructor(private _http: HttpClient,
    private _CookieService: CookieService) {


  }

  register(user: any): Observable<any> {
    return this._http.post(`${baseUrl}users/signup`, user)
  }

  getUserBooks(pageNumber: number): Observable<any> {
    // pageNumber = pageNumber - 1
    return this._http.get(`${baseUrl}userBook?page=${pageNumber < 0 ? 0 : pageNumber}`, { withCredentials: true })
  }

  getUserBooksByShelve(pageNumber: number, shelve: string): Observable<any> {
    // pageNumber = pageNumber - 1
    return this._http.get(`${baseUrl}userBook/${shelve}?page=${pageNumber < 0 ? 0 : pageNumber}`, { withCredentials: true })
  }

  login(data: any): Observable<any> {

    return this._http.post(`${baseUrl}users/login`, data, {
      withCredentials: true
    })

  }
  updateShelve(bookId: string, shelve: string): Observable<any> {
    return this._http.patch(`${baseUrl}userBook/${bookId}`, { shelve }, { withCredentials: true })
  }

  updateUserBookRate(bookId: string, rate: number): Observable<any> {
    return this._http.patch(`${baseUrl}userBook/${bookId}`, { rate }, { withCredentials: true })
  }

  getProfile(): Observable<any> {
    return this._http.get(`${baseUrl}users/profile`, { withCredentials: true })



  }

  setCurrentUser(obj: any) {
    this.currentUser.next(obj)
  }

  loggedOut() {
    this._CookieService.delete('status')
  }

  logout() {
    return this._http.get('https://backend-mean.onrender.com/users/logout', { withCredentials: true })

  }

  getToken() {


    return this._CookieService.get('jwt')

  }
}
