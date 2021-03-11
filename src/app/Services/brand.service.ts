import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from 'src/Model/admin';
import { Brand } from 'src/Model/brand';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  brands : Brand[]= null;
  Url = "http://localhost:65382/brand/"
  constructor(private http : HttpClient) { }

  get() : Observable<Brand[]>{
    return this.http.get<Brand[]>(this.Url);
  }
  getByID(id: number) : Observable<Brand>{
    return this.http.get<Brand>(this.Url+ id);
  }
  update(brand: Brand) : Observable<number>
  {
    var admin: Admin=JSON.parse(sessionStorage.getItem('Admin')).token;
    return this.http.put<number>(this.Url,brand,{headers: new HttpHeaders({ 'Authorization': 'Bearer ' + admin })})
  }
  insert(brand: Brand) : Observable<number>
  {
    var admin: Admin=JSON.parse(sessionStorage.getItem('Admin')).token;
    return this.http.post<number>(this.Url,brand,{headers: new HttpHeaders({ 'Authorization': 'Bearer ' + admin })})
  }
}
