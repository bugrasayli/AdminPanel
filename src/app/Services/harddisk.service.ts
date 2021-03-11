import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from 'src/Model/admin';
import { Memory } from 'src/Model/memory';

@Injectable({
  providedIn: 'root'
})
export class HarddiskService {

  constructor(private http : HttpClient) { }

  Url = "http://localhost:65382/memory/";
  get():Observable<Memory[]>
  {
    return this.http.get<Memory[]>(this.Url);
  }
  getByID(ID : number):Observable<Memory>
  {
    return this.http.get<Memory>(this.Url+ID);
  }
  update(memory: Memory) : Observable<number>
  {
    var admin: Admin=JSON.parse(sessionStorage.getItem('Admin')).token;
    return this.http.put<number>(this.Url,memory,{headers: new HttpHeaders({ 'Authorization': 'Bearer ' + admin })})
  }
  insert(memory: Memory) : Observable<number>
  {
    var admin: Admin=JSON.parse(sessionStorage.getItem('Admin')).token;
    return this.http.post<number>(this.Url,memory,{headers: new HttpHeaders({ 'Authorization': 'Bearer ' + admin })})
  }
  
}
