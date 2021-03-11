import { Component, OnInit } from '@angular/core';
import { ComputerService } from 'src/app/Services/computer.service';
import { Computer } from 'src/Model/computer';

@Component({
  selector: 'app-computers',
  templateUrl: './computers.component.html',
  styleUrls: ['./computers.component.scss']
})
export class ComputersComponent implements OnInit {

  constructor(private compServ: ComputerService) { }
  computers : Computer[] = null;
  ngOnInit(): void {
    this.compServ.get().subscribe(x => 
      {
        this.computers=x;
        console.log(x);
      })
  }

}
