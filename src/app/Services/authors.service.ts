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
    return this._http.post('http://localhost:3000/authors', data);
  }
  getAllAuthors(): Observable<any> {
    return this._http.get('http://localhost:3000/authors');
  }
  getPageAuthors(pageNumber: number = 1, pageSize: number = 5): Observable<any> {
    pageNumber = pageNumber - 1
    return this._http.get(`http://localhost:3000/authors?pageNumber=${pageNumber < 0 ? 0 : pageNumber}&pageSize=${pageSize}`);
  }

  deleteAnAuthor(id: number): Observable<any> {
    return this._http.delete(`http://localhost:3000/authors/${id}`)
  }
  updateAnAuthor(id: number, data: Author): Observable<any> {
    return this._http.put(`http://localhost:3000/authors/${id}`, data)
  }
}
