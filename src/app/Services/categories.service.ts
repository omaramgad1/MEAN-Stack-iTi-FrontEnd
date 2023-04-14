import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Category } from 'src/app/models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private _http: HttpClient) {


  }



  addNewCategory(data: any): Observable<any> {

    return this._http.post(`http://localhost:3000/categories`, data, {
      withCredentials: true
    });
  }

  geAllCategories(): Observable<any> {

    return this._http.get(`http://localhost:3000/categories/all`);
  }
  getPageCategories(pageNumber: number, pageSize: number): Observable<any> {

    return this._http.get(`http://localhost:3000/categories?pageNumber=${pageNumber}`);
  }

  getCategories(pageNumber: number, pageSize: number): Observable<any> {

    return this._http.get(`http://localhost:3000/categories?page=${pageNumber}&limit=${pageSize}`);
  }


  deleteCategory(id: any): Observable<any> {
    return this._http.delete(`http://localhost:3000/categories/${id}`, {
      withCredentials: true
    });
  }

  updateCategory(id: number, data: any): Observable<any> {
    return this._http.patch(`http://localhost:3000/categories/${id}`, data, {
      withCredentials: true
    });
  }
}
