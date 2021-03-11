import { Component, OnInit } from '@angular/core';
import { GraphicService } from 'src/app/Services/graphic.service';
import { GraphicCard } from 'src/Model/graphicCard';

@Component({
  selector: 'app-insert-graphic',
  templateUrl: './insert-graphic.component.html',
  styleUrls: ['./insert-graphic.component.scss']
})
export class InsertGraphicComponent implements OnInit {

  constructor(private graphicServe: GraphicService) { }
  inserted: number;
  ID: number;
  graphicCard: GraphicCard;

  ngOnInit(): void {
    this.graphicCard = new GraphicCard();
  }
  Save(graphicCard: GraphicCard) {
    this.inserted = 0;
    this.graphicServe.insert(graphicCard).subscribe(
      x => { this.ID= x },
      error => { this.inserted = 2 },
      () => { this.inserted = 1 }
    );
  }

}
