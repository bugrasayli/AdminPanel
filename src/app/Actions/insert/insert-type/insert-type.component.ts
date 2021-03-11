import { Component, OnInit } from '@angular/core';
import { TypeService } from 'src/app/Services/type.service';
import { Type } from 'src/Model/type';

@Component({
  selector: 'app-insert-type',
  templateUrl: './insert-type.component.html',
  styleUrls: ['./insert-type.component.scss']
})
export class InsertTypeComponent implements OnInit {

  ID: number;
  inserted: number;
  type: Type;
  constructor(private typeServe: TypeService) {
    this.type = new Type();
  }

  ngOnInit(): void {
  }
  Save(type) {
    this.inserted=0;
    this.typeServe.insert(type).subscribe(
      x=>{this.ID = x},
      error=> {this.inserted=2},
      ()=>{this.inserted=1}
    );
  }

}
