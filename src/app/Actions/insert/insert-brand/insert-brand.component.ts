import { Component, OnInit } from '@angular/core';
import { BrandService } from 'src/app/Services/brand.service';
import { Brand } from 'src/Model/brand';
import { Processor } from 'src/Model/processor';

@Component({
  selector: 'app-insert-brand',
  templateUrl: './insert-brand.component.html',
  styleUrls: ['./insert-brand.component.scss']
})
export class InsertBrandComponent implements OnInit {
  inserted = -1;
  brand: Brand;
  ID:number;
  constructor(private brandServ: BrandService) {
    this.brand = new Brand();
  }

  ngOnInit(): void {
  }
  Save(brand)
  {
    this.inserted =0;
  this.brandServ.insert(brand).subscribe(x => 
    { 
      this.inserted =1;
      this.ID = x;
    }, err=>{
      this.inserted=2;
    }
    );
    
  }

}
