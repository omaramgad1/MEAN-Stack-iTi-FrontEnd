import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Author } from '../models/author';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {
  constructor(private _http:HttpClient) {
    
   }
   addAuthor(data:Author):Observable<any>{
  return this._http.post('http://localhost:3000/authors',data);
   }
}
