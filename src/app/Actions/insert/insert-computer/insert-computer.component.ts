import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BrandService } from 'src/app/Services/brand.service';
import { ComputerService } from 'src/app/Services/computer.service';
import { CountryService } from 'src/app/Services/country.service';
import { GraphicService } from 'src/app/Services/graphic.service';
import { ProcessorService } from 'src/app/Services/processor.service';
import { RamService } from 'src/app/Services/ram.service';
import { TypeService } from 'src/app/Services/type.service';
import { Brand } from 'src/Model/brand';
import { Computer } from 'src/Model/computer';
import { GraphicCard } from 'src/Model/graphicCard';
import {Type} from 'src/Model/type';
import { Processor } from 'src/Model/processor';
import { Ram } from 'src/Model/ram';
import { Country } from 'src/Model/county';
import { Detail } from 'src/Model/detail';
import { Memory } from 'src/Model/memory';
import { HarddiskService } from 'src/app/Services/harddisk.service';

@Component({
  selector: 'app-insert-computer',
  templateUrl: './insert-computer.component.html',
  styleUrls: ['./insert-computer.component.scss']
})
export class InsertComputerComponent implements OnInit {

  computer: Computer= new Computer();
  detail : Detail; 
  type : Type ;
  brand : Brand ; 
  memory : Memory; 
  cpu: Processor; 
  graphic : GraphicCard;
  ram: Ram;
  country: Country;
  ID:number;
  
  graphics : GraphicCard[] =[];
  inserted:number= -1;
  brands: Brand[] = null;
  types: Type[] = null;
  rams: Ram[] = null;
  memories : Memory[] = null;
  cpus: Processor[] = null;
  PriceKey : string = "";
  countries:Country[] = null;
  constructor(private CompuServe: ComputerService, private route: ActivatedRoute, private BrandServ: BrandService, private router: Router,
    private RamServ: RamService, private GraphicServ: GraphicService,private hardServe: HarddiskService, private typeSer: TypeService, private CpuServ: ProcessorService, private CountryServe : CountryService) {
    this.computer = new Computer();
    this.detail= new Detail();
    this.country= new Country();this.country.id=1;
    this.cpu= new Processor(); this.cpu.id=1;
    this.ram= new Ram(); this.ram.id=1;
    this.type= new Type();this.type.id=1;
    this.brand= new Brand();this.brand.id=1;
    this.memory= new Memory();this.memory.id=1;
    this.graphic= new GraphicCard();this.graphic.id=1;
    this.memory = new Memory();this.memory.id=1;
  }
  ngOnInit(): void {
    this.computer = new Computer();
    this.GraphicServ.get().subscribe(x => { this.graphics = x; })
    this.hardServe.get().subscribe(x => { this.memories = x; })
    this.CpuServ.get().subscribe(x => { this.cpus = x; })
    this.CountryServe.get().subscribe(x => { this.countries = x; })
    this.typeSer.get().subscribe(x => { this.types = x; console.log(x) })
    this.BrandServ.get().subscribe(x => { this.brands = x; })
    this.RamServ.get().subscribe(x => { this.rams = x; })

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
  ChangeType(event)
  {
    this.type.id=+event.target.value;
  }
  ChangeBrand(event)
  {
    this.brand.id=+event.target.value;
  }
  ChangeMemory(event)
  {
    this.memory.id=+event.target.value;
  }
  ChangeRam(event)
  {
    this.ram.id=+event.target.value;
  }
  ChangeGraphic(event)
  {
    this.graphic.id=+event.target.value;
  }
  ChangeCPU(event){
    this.cpu.id=+event.target.value;
  }
  ChangeCountry(event){
    this.country.id=+event.target.value;
  }
  Save(computer: Computer)
  {
    computer.detail = this.detail;
    computer.country= this.country;
    computer.graphicCard=this.graphic;
    computer.processor=this.cpu;
    computer.type=this.type;
    computer.brand=this.brand;
    computer.ram=this.ram;
    computer.memory = this.memory;
    this.inserted=0;
    this.CompuServe.insert(computer).subscribe(
      x => { this.ID =+ x},
      error=>{this.inserted =2;},
      ()=> {this.inserted=1;});
  }
}
