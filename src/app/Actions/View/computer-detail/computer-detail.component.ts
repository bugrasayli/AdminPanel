import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BrandService } from 'src/app/Services/brand.service';
import { ComputerService } from 'src/app/Services/computer.service';
import { CountryService } from 'src/app/Services/country.service';
import { GraphicService } from 'src/app/Services/graphic.service';
import { HarddiskService } from 'src/app/Services/harddisk.service';
import { ProcessorService } from 'src/app/Services/processor.service';
import { RamService } from 'src/app/Services/ram.service';
import { TypeService } from 'src/app/Services/type.service';
import { Brand } from 'src/Model/brand';
import { Computer } from 'src/Model/computer';
import { Country } from 'src/Model/county';
import { GraphicCard } from 'src/Model/graphicCard';
import { Memory } from 'src/Model/memory';
import { Processor } from 'src/Model/processor';
import { Ram } from 'src/Model/ram';
import { Type } from 'src/Model/type';

@Component({
  selector: 'app-computer-detail',
  templateUrl: './computer-detail.component.html',
  styleUrls: ['./computer-detail.component.scss']
})
export class ComputerDetailComponent implements OnInit {

  computer: Computer;
  updated:number= -1;
  brands: Brand[] = null;
  memories:Memory[] = null;
  graphics: GraphicCard[] = null;
  types: Type[] = null;
  rams: Ram[] = null;
  cpus: Processor[] = null;
  PriceKey : string = "";
  countries:Country[] = null;
  constructor(private CompuServe: ComputerService, private route: ActivatedRoute, private BrandServ: BrandService, private router: Router,
    private RamServ: RamService,private MemoryServe : HarddiskService, private GraphicServ: GraphicService, private typeSer: TypeService, private CpuServ: ProcessorService, private CountryServe : CountryService) {
    this.computer = new Computer();
  }

  ngOnInit(): void {
    var id = + this.route.snapshot.paramMap.get('id');
    this.GraphicServ.get().subscribe(x => { this.graphics = x; })
    this.CpuServ.get().subscribe(x => { this.cpus = x; })
    this.CountryServe.get().subscribe(x => { this.countries = x; })
    this.MemoryServe.get().subscribe(x => { this.memories = x; })
    this.typeSer.get().subscribe(x => { this.types = x; })
    this.BrandServ.get().subscribe(x => { this.brands = x; })
    this.RamServ.get().subscribe(x => { this.rams = x; })
    this.CompuServe.getByID(id).subscribe(x => {
      console.log(x)
      if (x == null) {
        this.router.navigate(['']);
      }
      this.computer = x;
    })
    
  }
  Update(computer: Computer)
  {
    this.updated=0;
    this.CompuServe.update(computer).subscribe(x => 
      {},
      err=> { this.updated=2}
      ,() => this.updated = 1);
    
  }
  ChangeType(event)
  {
    this.computer.type.id=+event.target.value;
  }
  ChangeBrand(event)
  {
    this.computer.brand.id=+event.target.value;
  }
  ChangeRam(event)
  {
    this.computer.ram.id=+event.target.value;
  }
  ChangeGraphic(event)
  {
    this.computer.graphicCard.id=+event.target.value;
  }
  ChangeCPU(event){
    this.computer.processor.id=+event.target.value;
    
  }
  ChangeCountry(event){
    this.computer.country.id=+event.target.value;
  }
  ChangeMemory(event){
    this.computer.memory.id=+event.target.value;
  }
  PriceKeyup(event){
    var price = this.computer.detail.price;
    var discount= this.computer.detail.discount;
    var lastprice= price * ((100 -discount)/100);
    this.computer.detail.lastPrice= lastprice;
  }
  DiscountKeyup(event){
    var price = this.computer.detail.price;
    var discount= this.computer.detail.discount;
    var lastprice= price * ((100 -discount)/100);
    this.computer.detail.lastPrice= lastprice;
  }
  

}
