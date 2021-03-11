import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GraphicService } from 'src/app/Services/graphic.service';
import { GraphicCard } from 'src/Model/graphicCard';

@Component({
  selector: 'app-graphic-detal',
  templateUrl: './graphic-detal.component.html',
  styleUrls: ['./graphic-detal.component.scss']
})
export class GraphicDetalComponent implements OnInit {

  constructor(private GraphServe: GraphicService, private route: ActivatedRoute) { }

  GraphicCard: GraphicCard;
  ID: number;
  updated = -1;
  ngOnInit(): void {
    console.log("works")
    this.ID = + this.route.snapshot.paramMap.get('id');
    this.GraphServe.getByID(this.ID).subscribe(x => {
      this.GraphicCard = x;
      console.log(this.GraphicCard)
      console.log(x)
    });
  }
  Update(GraphicCard: GraphicCard) {
    this.updated=0;
    this.GraphServe.update(GraphicCard).subscribe(
      x => {}, 
      error => {this.updated = 2;},
      ()=> {this.updated=1;}
      );
  }
}
