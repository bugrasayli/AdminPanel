import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RamService } from 'src/app/Services/ram.service';
import { Ram } from 'src/Model/ram';

@Component({
  selector: 'app-ram-detail',
  templateUrl: './ram-detail.component.html',
  styleUrls: ['./ram-detail.component.scss']
})
export class RamDetailComponent implements OnInit {
  updated = -1;
  ram: Ram;
  ID:number;
  constructor(private RamServe: RamService,private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.ID =+this.route.snapshot.paramMap.get('id') 
    this.RamServe.getByID(this.ID).subscribe(x=> {this.ram=x});
  }
  Update(ram) {
    this.updated=0;
    this.RamServe.update(ram).subscribe(
      x =>{},
      error=> { this.updated=2;},
      ()=>{ this.updated=1;}
      )
     
      
  }
}
