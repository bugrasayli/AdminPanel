import { Component, OnInit } from '@angular/core';
import { asapScheduler } from 'rxjs';
import { ProcessorService } from 'src/app/Services/processor.service';
import { Processor } from 'src/Model/processor';

@Component({
  selector: 'app-insert-cpu',
  templateUrl: './insert-cpu.component.html',
  styleUrls: ['./insert-cpu.component.scss']
})
export class InsertCpuComponent implements OnInit {
  cpu: Processor;
  inserted: number = -1;
  isLoading = false;
  ID: number = 0;
  constructor(private CPuServ: ProcessorService) {
    this.cpu = new Processor();
  }

  ngOnInit(): void {
  }
  Save(cpu) {
    this.inserted=0;
    this.CPuServ.insert(cpu).subscribe(x => {
      this.ID = x;
      this.inserted=1;
    }, err => {
      this.inserted = 2;
    },()=>{
      this.isLoading=false;
    });
  }
}
