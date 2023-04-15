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
    return this._http.post('https://backend-mean.onrender.com/users/signup', user)
  }

  getUserBooks(pageNumber: number): Observable<any> {
    // pageNumber = pageNumber - 1
    return this._http.get(`https://backend-mean.onrender.com/userBook?page=${pageNumber < 0 ? 0 : pageNumber}`, { withCredentials: true })
  }

  getUserBooksByShelve(pageNumber: number, shelve: string): Observable<any> {
    // pageNumber = pageNumber - 1
    return this._http.get(`https://backend-mean.onrender.com/userBook/${shelve}?page=${pageNumber < 0 ? 0 : pageNumber}`, { withCredentials: true })
  }

  login(data: any): Observable<any> {

    return this._http.post('https://backend-mean.onrender.com/users/login', data, {
      withCredentials: true
    })

  }
  updateShelve(bookId: string, shelve: string): Observable<any> {
    return this._http.patch(`https://backend-mean.onrender.com/userBook/${bookId}`, { shelve }, { withCredentials: true })
  }

  updateUserBookRate(bookId: string, rate: number): Observable<any> {
    return this._http.patch(`https://backend-mean.onrender.com/userBook/${bookId}`, { rate }, { withCredentials: true })
  }

  getProfile(): Observable<any> {
    return this._http.get('https://backend-mean.onrender.com/users/profile', { withCredentials: true })



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
}
