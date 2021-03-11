import { Component, OnInit } from '@angular/core';
import { HarddiskService } from 'src/app/Services/harddisk.service';
import { Memory } from 'src/Model/memory';

@Component({
  selector: 'app-harddisks',
  templateUrl: './harddisks.component.html',
  styleUrls: ['./harddisks.component.scss']
})
export class HarddisksComponent implements OnInit {

  constructor(private Hardserv: HarddiskService) { }
  harddisks : Memory[]= null
  ngOnInit(): void {
    this.Hardserv.get().subscribe(x => { this.harddisks =x});
  }

}
