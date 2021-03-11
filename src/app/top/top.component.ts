import { Component, OnInit } from '@angular/core';
import { Admin } from 'src/Model/admin';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss']
})
export class TopComponent implements OnInit {

  constructor() { }
  admin :Admin;
  ngOnInit(): void {
  this.admin =JSON.parse(sessionStorage.getItem('Admin'))
  }
  logout(){
    sessionStorage.setItem('Admin','');
  }

}
