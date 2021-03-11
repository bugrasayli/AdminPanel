import { Component, OnInit } from '@angular/core';
import { memory } from 'console';
import { HarddiskService } from 'src/app/Services/harddisk.service';
import { Memory } from 'src/Model/memory';

@Component({
  selector: 'app-insert-harddisk',
  templateUrl: './insert-harddisk.component.html',
  styleUrls: ['./insert-harddisk.component.scss']
})
export class InsertHarddiskComponent implements OnInit {

  Memory : Memory;
  ID :number;
  inserted : number;
  constructor(private Harddisk : HarddiskService) { 
    this.Memory = new Memory();
  }

  ngOnInit(): void {
  }
  Save(Memory)
  {
    this.inserted=0;
    this.Harddisk.insert(Memory).subscribe(
      x=> { this.ID = x},
      error => { this.inserted=2;},
      () => { this.inserted=1;}
    );
  }

}
