import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Author } from '../models/author';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthorsService {
  constructor(private _http: HttpClient) {

  }
  addAuthor(data: any): Observable<any> {
    return this._http.post('https://backend-mean.onrender.com/authors', data, {
      withCredentials: true
    });
  }
  getAllAuthors(): Observable<any> {
    return this._http.get('https://backend-mean.onrender.com/authors/all');
  }
  getPageAuthors(pageNumber: number = 1): Observable<any> {
    pageNumber = pageNumber - 1

    return this._http.get(`https://backend-mean.onrender.com/authors?pageNumber=${pageNumber < 0 ? 0 : pageNumber}`);
  }

  getAuthors(pageNumber: number = 1, pageSize: number): Observable<any> {
    pageNumber = pageNumber - 1

    return this._http.get(`https://backend-mean.onrender.com/authors?pageNumber=${pageNumber}&pageSize=${pageSize}`);
  }

  deleteAnAuthor(_id: string): Observable<any> {
    return this._http.delete(`https://backend-mean.onrender.com/authors/${_id}`, {
      withCredentials: true
    })
  }
  updateAnAuthor(_id: string, data: any): Observable<any> {
    return this._http.patch(`https://backend-mean.onrender.com/authors/${_id}`, data, {
      withCredentials: true
    })
  }
}
