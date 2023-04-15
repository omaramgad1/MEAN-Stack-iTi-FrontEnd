import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const baseUrl = 'http://localhost:3000/';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private _http: HttpClient) { }



  addNewBook(data: any): Observable<any> {

    return this._http.post(`${baseUrl}books`, data, {
      withCredentials: true
    });
  }





  getPageBooks(pageNumber: number = 1): Observable<any> {

    pageNumber = pageNumber - 1
    return this._http.get(`${baseUrl}books?pageNumber=${pageNumber < 0 ? 0 : pageNumber}`);

  };


  getAllPagesBooks(pageNumber: number, pageSize: number): Observable<any> {
    return this._http.get(`${baseUrl}books?pageNumber=${pageNumber}&pageSize=${pageSize}`);

  }

  deleteBook(id: string): Observable<any> {
    return this._http.delete(`${baseUrl}books/${id}`, {
      withCredentials: true
    });
  }



  updateBook(id: string, data: any): Observable<any> {
    return this._http.patch(`${baseUrl}books/${id}`, data, {
      withCredentials: true
    });
  }
  getBookById(id: string): Observable<any> {
    return this._http.get(`${baseUrl}books/${id}`)
  }
}
