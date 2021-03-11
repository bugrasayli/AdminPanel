import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { Admin } from 'src/Model/admin';
import { Observable } from 'rxjs';
import { token } from 'src/Model/token';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  URL = "http://localhost:65382/admin";

  constructor(private http: HttpClient) { }
  login(admin: Admin):Observable<token> {
    return this.http.get<token>(this.URL + '?email='+admin.email+'&password='+admin.password);
  }
}
