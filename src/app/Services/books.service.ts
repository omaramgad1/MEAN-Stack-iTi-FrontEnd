import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private _http: HttpClient) { }



  addNewBook(data: any): Observable<any> {

    return this._http.post(`http://localhost:3000/books`, data, {
      withCredentials: true
    });
  }

  geAllBooks(): Observable<any> {

    return this._http.get(`http://localhost:3000/books`);
  }
  getPageBooks(pageNumber: number = 1, pageSize: number = 5): Observable<any> {
    pageNumber = pageNumber - 1
    return this._http.get(`http://localhost:3000/books?pageNumber=${pageNumber < 0 ? 0 : pageNumber}&pageSize=${pageSize}`);
  }



  deleteBook(id: string): Observable<any> {
    return this._http.delete(`http://localhost:3000/books/${id}`, {
      withCredentials: true
    });
  }

  updateBook(id: string, data: any): Observable<any> {
    return this._http.patch(`http://localhost:3000/books/${id}`, data, {
      withCredentials: true
    });
  }
}
