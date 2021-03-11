import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from 'src/Model/admin';
import { Brand } from 'src/Model/brand';
import { Country } from 'src/Model/county';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  Url = "http://localhost:65382/country"
  constructor(private http : HttpClient) { }
  get() : Observable<Country[]>{
    return this.http.get<Country[]>(this.Url);
  }
  getByID(id: number): Observable<Country> {
    return this.http.get<Country>(this.Url+id);
  }
  update(cpu: Country) : Observable<number>
  {
    var admin: Admin=JSON.parse(sessionStorage.getItem('Admin')).token;
    return this.http.put<number>(this.Url,cpu,{headers: new HttpHeaders({ 'Authorization': 'Bearer ' + admin })})
  }
  insert(cpu: Country) : Observable<number>
  {
    var admin: Admin=JSON.parse(sessionStorage.getItem('Admin')).token;
    return this.http.post<number>(this.Url,cpu,{headers: new HttpHeaders({ 'Authorization': 'Bearer ' + admin })})
  }
}
