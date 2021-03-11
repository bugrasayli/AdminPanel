import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from 'src/Model/admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  admin : Admin;
  get():Admin
  {return this.admin;}
  constructor(private http: HttpClient) { }
  private URL = "http://localhost:65382/admin";
  getAdmin(admin: Admin): Observable<any> {
    var token = admin.token;
    return this.http.get<Admin>(this.URL+'/getadmin?email='+admin.email+'&password='+admin.password, {headers: new HttpHeaders({ 'Authorization': 'Bearer ' + token })});
  }
}
