import { Component, OnInit } from '@angular/core';
import { RamService } from 'src/app/Services/ram.service';
import { Ram } from 'src/Model/ram';

@Component({
  selector: 'app-rams',
  templateUrl: './rams.component.html',
  styleUrls: ['./rams.component.scss']
})
export class RamsComponent implements OnInit {

  rams : Ram[]= null;
  constructor(private ramService : RamService) { }

  ngOnInit(): void {
    this.ramService.get().subscribe(x=> {this.rams = x});
  }

}
