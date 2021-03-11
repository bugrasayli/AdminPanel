import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BrandService } from 'src/app/Services/brand.service';
import { Brand } from 'src/Model/brand';

@Component({
  selector: 'app-brand-detail',
  templateUrl: './brand-detail.component.html',
  styleUrls: ['./brand-detail.component.scss']
})
export class BrandDetailComponent implements OnInit {

  constructor(private brandServ: BrandService, private route: ActivatedRoute) { }
  brand: Brand = new Brand();
  updated: number = -1;
  ngOnInit(): void {
    var id = + this.route.snapshot.paramMap.get('id');
    this.brandServ.getByID(id).subscribe(x => { this.brand = x });
  }
  Update(brand: Brand) {
    this.updated = 0
    this.brandServ.update(brand).subscribe(x => {
       },
      error => {this.updated=2;},
      () => this.updated=1
      )
}

}
