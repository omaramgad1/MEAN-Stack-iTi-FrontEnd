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

    return this._http.post(`https://backend-mean.onrender.com/categories`, data, {
      withCredentials: true
    });
  }

  geAllCategories(): Observable<any> {

    return this._http.get(`https://backend-mean.onrender.com/categories/all`);
  }
  getPageCategories(pageNumber: number = 1): Observable<any> {
    pageNumber = pageNumber - 1
    return this._http.get(`https://backend-mean.onrender.com/categories?pageNumber=${pageNumber < 0 ? 0 : pageNumber}`);
  }

  getCategories(pageNumber: number = 1, pageSize: number): Observable<any> {
    pageNumber = pageNumber - 1
    return this._http.get(`https://backend-mean.onrender.com/categories?pageNumber=${pageNumber}&pageSize=${pageSize}`);
  }
  deleteCategory(id: any): Observable<any> {
    return this._http.delete(`https://backend-mean.onrender.com/categories/${id}`, {
      withCredentials: true
    });
  }

  getBooksByCategoryId(categoryId: number): Observable<any> {
    return this._http.get(`https://backend-mean.onrender.com/categories/${categoryId}`);
  }
  updateCategory(id: number, data: any): Observable<any> {
    return this._http.patch(`https://backend-mean.onrender.com/categories/${id}`, data, {
      withCredentials: true
    });
  }
}
