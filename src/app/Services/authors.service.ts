import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Author } from '../models/author';
import { Observable } from 'rxjs';
const baseUrl = 'https://backend-mean.onrender.com/';
// https://backend-mean.onrender.com/
@Injectable({
  providedIn: 'root'
})

export class AuthorsService {
  constructor(private _http: HttpClient) {

  }
  addAuthor(data: any): Observable<any> {
    return this._http.post(`${baseUrl}authors`, data, {
      withCredentials: true
    });
  }
  getAllAuthors(): Observable<any> {
    return this._http.get(`${baseUrl}authors/all`);
  }
  getPageAuthors(pageNumber: number = 1): Observable<any> {
    pageNumber = pageNumber - 1

    return this._http.get(`${baseUrl}authors?pageNumber=${pageNumber < 0 ? 0 : pageNumber}`);
  }

  getAuthors(pageNumber: number = 1, pageSize: number): Observable<any> {
    pageNumber = pageNumber - 1

    return this._http.get(`${baseUrl}authors?pageNumber=${pageNumber}&pageSize=${pageSize}`);
  }
  getAuthorById(id: string): Observable<any> {
    return this._http.get(`${baseUrl}authors/${id}`);
  }
  getAllBooksByAuthorId(id: string): Observable<any> {
    return this._http.get(`${baseUrl}authors/books/${id}`);
  }


  deleteAnAuthor(_id: string): Observable<any> {
    return this._http.delete(`${baseUrl}authors/${_id}`, {
      withCredentials: true
    })
  }
  updateAnAuthor(_id: string, data: any): Observable<any> {
    return this._http.patch(`${baseUrl}authors/${_id}`, data, {
      withCredentials: true
    })
  }
}
