import { Component, OnInit } from '@angular/core';
import { RamService } from 'src/app/Services/ram.service';
import { Ram } from 'src/Model/ram';

@Component({
  selector: 'app-insert-ram',
  templateUrl: './insert-ram.component.html',
  styleUrls: ['./insert-ram.component.scss']
})
export class InsertRamComponent implements OnInit {

  RAM: Ram;
  inserted;
  ID: number;
  constructor(private RamServe: RamService) {
    this.RAM = new Ram();

  }

  ngOnInit(): void {
  }
  Save(RAM) {
    this.inserted = 0;
    this.RamServe.insert(RAM).subscribe(
      x => { this.ID = x },
      error => { this.inserted = 2; },
      () => { this.inserted = 1; }
    );
  }

}
