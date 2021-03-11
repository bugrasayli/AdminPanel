import { Component, OnInit } from '@angular/core';
import { BrandService } from 'src/app/Services/brand.service';
import { Brand } from 'src/Model/brand';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent implements OnInit {

  brands: Brand[] = null;
  constructor(private BrandSer: BrandService) { }

  ngOnInit(): void {

    this.BrandSer.get().subscribe(x => {
      this.brands = x;
      console.log(x)
    });
  }

}
