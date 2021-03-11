import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from 'src/Model/admin';
import { Ram } from 'src/Model/ram';

@Injectable({
  providedIn: 'root'
})
export class RamService {

  rams : Ram[]= null;
  Url = "http://localhost:65382/ram/"
  constructor(private http : HttpClient) { }

  get() : Observable<Ram[]>{
    return this.http.get<Ram[]>(this.Url);
  }
  getByID(ID: number) : Observable<Ram>{
    return this.http.get<Ram>(this.Url+ID);
  }
  update(ram: Ram) : Observable<number>
  {
    var admin: Admin=JSON.parse(sessionStorage.getItem('Admin')).token;
    return this.http.put<number>(this.Url,ram,{headers: new HttpHeaders({ 'Authorization': 'Bearer ' + admin })})
  }
  insert(ram: Ram) : Observable<number>
  {
    var admin: Admin=JSON.parse(sessionStorage.getItem('Admin')).token;
    return this.http.post<number>(this.Url,ram,{headers: new HttpHeaders({ 'Authorization': 'Bearer ' + admin })})
  }
}
