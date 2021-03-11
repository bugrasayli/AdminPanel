import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from 'src/Model/admin';
import { GraphicCard } from 'src/Model/graphicCard';

@Injectable({
  providedIn: 'root'
})
export class GraphicService {

  constructor(private http : HttpClient) { }
  Url = "http://localhost:65382/graphic/"

  get() : Observable<GraphicCard[]>
  {
    return this.http.get<GraphicCard[]>(this.Url);
  }
  getByID(ID : number):Observable<GraphicCard>
  {
    return this.http.get<GraphicCard>(this.Url+ID);
  }
  update(card: GraphicCard) : Observable<number>
  {
    var admin: Admin=JSON.parse(sessionStorage.getItem('Admin')).token;
    return this.http.put<number>(this.Url,card,{headers: new HttpHeaders({ 'Authorization': 'Bearer ' + admin })})
  }
  insert(card: GraphicCard) : Observable<number>
  {
    var admin: Admin=JSON.parse(sessionStorage.getItem('Admin')).token;
    return this.http.post<number>(this.Url,card,{headers: new HttpHeaders({ 'Authorization': 'Bearer ' + admin })})
  }
}
