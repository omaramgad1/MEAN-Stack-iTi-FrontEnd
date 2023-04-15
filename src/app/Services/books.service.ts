import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private _http: HttpClient) { }



  addNewBook(data: any): Observable<any> {

    return this._http.post(`https://backend-mean.onrender.com/books`, data, {
      withCredentials: true
    });
  }





  getPageBooks(pageNumber: number = 1): Observable<any> {

    pageNumber = pageNumber - 1
    return this._http.get(`https://backend-mean.onrender.com/books?pageNumber=${pageNumber < 0 ? 0 : pageNumber}`);

  };


  getAllPagesBooks(pageNumber: number, pageSize: number): Observable<any> {
    return this._http.get(`https://backend-mean.onrender.com/books?pageNumber=${pageNumber}&pageSize=${pageSize}`);

  }

  deleteBook(id: string): Observable<any> {
    return this._http.delete(`https://backend-mean.onrender.com/books/${id}`, {
      withCredentials: true
    });
  }



  updateBook(id: string, data: any): Observable<any> {
    return this._http.patch(`https://backend-mean.onrender.com/books/${id}`, data, {
      withCredentials: true
    });
  }
}
