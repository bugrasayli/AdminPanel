import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HarddiskService } from 'src/app/Services/harddisk.service';
import { Memory } from 'src/Model/memory';

@Component({
  selector: 'app-harddisk-detail',
  templateUrl: './harddisk-detail.component.html',
  styleUrls: ['./harddisk-detail.component.scss']
})
export class HarddiskDetailComponent implements OnInit {

  updated = -1;
  harddisk: Memory;
  ID: number;
  constructor(private hardServ: HarddiskService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.ID = +this.route.snapshot.paramMap.get('id')
    this.hardServ.getByID(this.ID).subscribe(x => {
      this.harddisk = x;
    });
  }
  Update(harddisk) {
    this.updated = 0;
    this.hardServ.update(harddisk).subscribe(
      x => { },
      err => { this.updated = 2 },
      () => { this.updated = 1; }
    );
  }
}
