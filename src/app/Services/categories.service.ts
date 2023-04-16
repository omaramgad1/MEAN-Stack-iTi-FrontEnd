import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Category } from 'src/app/models/category';
const baseUrl = 'https://backend-mean.onrender.com/';


@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private _http: HttpClient) {


  }



  addNewCategory(data: any): Observable<any> {

    return this._http.post(`${baseUrl}categories`, data, {
      withCredentials: true
    });
  }

  geAllCategories(): Observable<any> {

    return this._http.get(`${baseUrl}categories/all`);
  }
  getPageCategories(pageNumber: number = 1): Observable<any> {
    pageNumber = pageNumber - 1
    return this._http.get(`${baseUrl}categories?pageNumber=${pageNumber < 0 ? 0 : pageNumber}`);
  }

  getCategories(pageNumber: number = 1, pageSize: number): Observable<any> {
    pageNumber = pageNumber - 1
    return this._http.get(`${baseUrl}categories?pageNumber=${pageNumber}&pageSize=${pageSize}`);
  }
  getCategorieByID(id: string): Observable<any> {
    return this._http.get(`${baseUrl}categories/${id}`);
  }
  deleteCategory(id: any): Observable<any> {
    return this._http.delete(`${baseUrl}categories/${id}`, {
      withCredentials: true
    });
  }

  getBooksByCategoryId(categoryId: number): Observable<any> {
    return this._http.get(`${baseUrl}categories/${categoryId}`);
  }
  updateCategory(id: number, data: any): Observable<any> {
    return this._http.patch(`${baseUrl}categories/${id}`, data, {
      withCredentials: true
    });
  }
}
