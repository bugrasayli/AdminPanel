import { Component, OnInit } from '@angular/core';
import { Admin } from 'src/Model/admin';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  admin: Admin;

  constructor() {
    this.admin = new Admin();
  }

  ngOnInit(): void {
    this.admin = JSON.parse(sessionStorage.getItem('Admin'));
  }

}
