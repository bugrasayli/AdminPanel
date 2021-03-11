import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from 'src/Model/admin';
import { Type } from 'src/Model/type';

@Injectable({
  providedIn: 'root'
})
export class TypeService {
  Url = "http://localhost:65382/type/"
  constructor(private http: HttpClient) { }

  get(): Observable<Type[]> {
    return this.http.get<Type[]>(this.Url);
  }
  getByID(id: number): Observable<Type> {
    return this.http.get<Type>(this.Url + id);
  }
  update(brand: Type): Observable<number> {
    var admin: Admin = JSON.parse(sessionStorage.getItem('Admin')).token;
    return this.http.put<number>(this.Url, brand, { headers: new HttpHeaders({ 'Authorization': 'Bearer ' + admin }) })
  }
  insert(brand: Type): Observable<number> {
    var admin: Admin = JSON.parse(sessionStorage.getItem('Admin')).token;
    return this.http.post<number>(this.Url, brand, { headers: new HttpHeaders({ 'Authorization': 'Bearer ' + admin }) })
  }




}

