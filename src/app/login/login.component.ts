import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from 'src/Model/admin';
import { AdminService } from '../Services/admin.service';
import { LoginService } from '../Services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  token;
  check: boolean = false;
  admin = new Admin();
  errorType = "";
  isLoading=false;
  constructor(private loginService: LoginService, private adminService: AdminService, private router: Router) { }
  ngOnInit(): void {
    if(sessionStorage.getItem('Admin')!= null)
    {
      this.router.navigate(['']);
     }    
  }
  Login() {
    this.isLoading=true
    this.loginService.login(this.admin).subscribe(x => {
      this.admin.token = x.token;
      this.adminService.getAdmin(this.admin).subscribe(y => {
        this.admin = y;
        this.admin.token = x.token;
        sessionStorage.setItem("Admin", JSON.stringify(y));
        this.router.navigate(['']);
      });
    }, (err: HttpErrorResponse) => {
      if (err.status == 401) {
        this.check = true;
        this.isLoading = false;
        this.errorType = "Wrong Email or Password";
      }
      else {
        this.check = true;
        this.isLoading = false;

        this.errorType = "Unknown Error";
      }
    },()=> {
      this.isLoading=false;
    });
  }
}
