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

    return this._http.get(`http://localhost:3000/categories`);
  }
  getPageCategories(pageNumber: number, pageSize: number): Observable<any> {
    console.log(pageNumber);

    return this._http.get(`http://localhost:3000/categories?page=${pageNumber}`);
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
