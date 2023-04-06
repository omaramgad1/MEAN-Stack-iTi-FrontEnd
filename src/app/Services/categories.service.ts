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

    return this._http.post(`http://localhost:3000/categories`, data);
  }

  geAllCategories(): Observable<any> {

    return this._http.get(`http://localhost:3000/categories`);
  }
  getPageCategories(pageNumber: number = 1, pageSize: number = 5): Observable<any> {
    pageNumber = pageNumber - 1
    return this._http.get(`http://localhost:3000/categories?pageNumber=${pageNumber < 0 ? 0 : pageNumber}&pageSize=${pageSize}`);
  }


  deleteCategory(id: any): Observable<any> {
    return this._http.delete(`http://localhost:3000/categories/${id}`);
  }

  updateCategory(id: number, data: any): Observable<any> {
    return this._http.put(`http://localhost:3000/categories/${id}`, data);
  }
}
