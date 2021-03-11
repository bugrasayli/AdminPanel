import { Brand } from "./brand";
import { Country } from "./county";
import { Detail } from "./detail";
import { GraphicCard } from "./graphicCard";
import { Memory } from "./memory";
import { Processor } from "./processor";
import { Ram } from "./ram";
import { Type } from "./type";

export class Computer {
    id: number;
    name:string;
    rate:number;
    detail: Detail;
    brand: Brand
    country: Country;
    processor: Processor;
    graphicCard: GraphicCard;
    type: Type;
    memory: Memory
    ram: Ram;
}

