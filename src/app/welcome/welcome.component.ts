import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Admin } from 'src/Model/admin';
import { AdminService } from '../Services/admin.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  constructor(private adminService :AdminService) { }

  admin:Admin=null;
  ngOnInit(): void {
    console.log("working");
    this.admin =JSON.parse(sessionStorage.getItem("Admin"));
    console.log(this.admin)
  }

}
