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
  addAuthor(data: Author): Observable<any> {
    return this._http.post('http://localhost:3000/authors', data, {
      withCredentials: true
    });
  }
  getAllAuthors(): Observable<any> {
    return this._http.get('http://localhost:3000/authors');
  }
  getPageAuthors(pageNumber: number = 1, pageSize: number = 5): Observable<any> {
    pageNumber = pageNumber - 1
    return this._http.get(`http://localhost:3000/authors?pageNumber=${pageNumber < 0 ? 0 : pageNumber}&pageSize=${pageSize}`);
  }

  deleteAnAuthor(id: string): Observable<any> {
    return this._http.delete(`http://localhost:3000/authors/${id}`, {
      withCredentials: true
    })
  }
  updateAnAuthor(id: string, data: Author): Observable<any> {
    return this._http.patch(`http://localhost:3000/authors/${id}`, data, {
      withCredentials: true
    })
  }
}
