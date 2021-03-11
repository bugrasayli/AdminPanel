import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from 'src/Model/admin';
import { Memory } from 'src/Model/memory';

@Injectable({
  providedIn: 'root'
})
export class MemoryService {

  constructor(private http: HttpClient) { }
  Url = "http://localhost:65382/memory/"
  get(): Observable<Memory[]> {
    return this.http.get<Memory[]>(this.Url);
  }
  getByID(id: number): Observable<Memory> {
    return this.http.get<Memory>(this.Url + id);
  }
  update(brand: Memory): Observable<number> {
    var admin: Admin = JSON.parse(sessionStorage.getItem('Admin')).token;
    return this.http.put<number>(this.Url, brand, { headers: new HttpHeaders({ 'Authorization': 'Bearer ' + admin }) })
  }
  insert(brand: Memory): Observable<number> {
    var admin: Admin = JSON.parse(sessionStorage.getItem('Admin')).token;
    return this.http.post<number>(this.Url, brand, { headers: new HttpHeaders({ 'Authorization': 'Bearer ' + admin }) })
  }
}
