import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from 'src/Model/admin';
import { Processor } from 'src/Model/processor';

@Injectable({
  providedIn: 'root'
})
export class ProcessorService {

  Url = "http://localhost:65382/cpu/"
  constructor(private http: HttpClient) { }
  get(): Observable<Processor[]> {
    return this.http.get<Processor[]>(this.Url);
  }
  getByID(id: number): Observable<Processor> {
    return this.http.get<Processor>(this.Url+id);
  }
  update(cpu: Processor) : Observable<number>
  {
    var admin: Admin=JSON.parse(sessionStorage.getItem('Admin')).token;
    return this.http.put<number>(this.Url,cpu,{headers: new HttpHeaders({ 'Authorization': 'Bearer ' + admin })})
  }
  insert(cpu: Processor) : Observable<number>
  {
    var admin: Admin=JSON.parse(sessionStorage.getItem('Admin')).token;
    return this.http.post<number>(this.Url,cpu,{headers: new HttpHeaders({ 'Authorization': 'Bearer ' + admin })})
  }
}
