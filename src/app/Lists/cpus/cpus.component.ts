import { Component, OnInit } from '@angular/core';
import { ProcessorService } from 'src/app/Services/processor.service';
import { Processor } from 'src/Model/processor';

@Component({
  selector: 'app-cpus',
  templateUrl: './cpus.component.html',
  styleUrls: ['./cpus.component.scss']
})
export class CPUsComponent implements OnInit {

  constructor(private cpuServ: ProcessorService) { }

  Cpus: Processor[] = null;
  ngOnInit(): void {
    this.cpuServ.get().subscribe(x => { this.Cpus = x });
  }

}
