import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ComputerService } from 'src/app/Services/computer.service';
import { ProcessorService } from 'src/app/Services/processor.service';
import { Processor } from 'src/Model/processor';

@Component({
  selector: 'app-cpu-detail',
  templateUrl: './cpu-detail.component.html',
  styleUrls: ['./cpu-detail.component.scss']
})
export class CpuDetailComponent implements OnInit {
  updated = -1;
  cpu: Processor;
  ID:number;
  constructor(private CpServ: ProcessorService,private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.ID =+this.route.snapshot.paramMap.get('id') 
    this.CpServ.getByID(this.ID).subscribe(x=> {this.cpu=x});
  }
  Update(cpu) {
    this.updated=0;
    this.CpServ.update(cpu).subscribe(
      x => {}, 
      err => {this.updated = 2; },
      ()=> this.updated=1)
  }
}
