import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from 'src/Model/admin';
import { Computer } from 'src/Model/computer';

@Injectable({
  providedIn: 'root'
})
export class ComputerService {
  Url = "http://localhost:65382/computer/"
  constructor(private http : HttpClient) { }
  get() : Observable<Computer[]>
  {
    return this.http.get<Computer[]>(this.Url);
  }
  getByID(id: number) : Observable<Computer>
  {
    return this.http.get<Computer>(this.Url+id);
  }
  update(computer: Computer)
  {
    var admin: Admin=JSON.parse(sessionStorage.getItem('Admin')).token;
    return this.http.put(this.Url,computer,{headers: new HttpHeaders({ 'Authorization': 'Bearer ' + admin })})
  }
  insert(computer: Computer)
  {
    var admin: Admin=JSON.parse(sessionStorage.getItem('Admin')).token;
    console.log(computer);
    return this.http.post(this.Url,computer,{headers: new HttpHeaders({ 'Authorization': 'Bearer ' + admin })})
  }
}
