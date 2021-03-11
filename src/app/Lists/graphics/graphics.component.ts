import { Component, OnInit } from '@angular/core';
import { GraphicService } from 'src/app/Services/graphic.service';
import { GraphicCard } from 'src/Model/graphicCard';

@Component({
  selector: 'app-graphics',
  templateUrl: './graphics.component.html',
  styleUrls: ['./graphics.component.scss']
})
export class GraphicsComponent implements OnInit {

  constructor(private service : GraphicService) { }

  graphics : GraphicCard[] = [];
  ngOnInit(): void {
    this.service.get().subscribe(x => { this.graphics = x; console.log(x)});
  }
}
