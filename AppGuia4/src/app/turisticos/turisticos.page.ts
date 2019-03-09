import { Component, OnInit } from '@angular/core';
import { TuristicosService } from "./turisticos.service";
import { ITuristico } from './turisticos';




@Component({
  selector: 'app-turisticos',
  templateUrl: './turisticos.page.html',
  styleUrls: ['./turisticos.page.scss'],
})
export class TuristicosPage implements OnInit {

  constructor(private turisticosService : TuristicosService) { }

//turistico: ITuristico[] = [];


turistico: ITuristico[] = [
  {
    "tourId": 1,
    "tourName": "VILLETA, CUNDINAMARCA ",
    "tourSite": "CUNDINAMARCA",
    "price": 10000,
    "imageUrl": "http://www.villeta-cundinamarca.gov.co/MiMunicipio/PublishingImages/Paginas/Sitios-de-Interes/5314855.jpg"
  },
  {
      "tourId": 2,
      "tourName": "GIRARDOT",
      "tourSite": "GDN-0011",
      "price": 19.95,
      "imageUrl": "https://radiocolina.com/wp-content/uploads/2018/10/girardot1.jpg"
  },
  {
      "tourId": 3,
      "tourName": "MEDELLIN",
      "tourSite": "GDN-0011",
      "price": 19.95,
      "imageUrl": "http://www.villeta-cundinamarca.gov.co/MiMunicipio/PublishingImages/Paginas/Sitios-de-Interes/5314855.jpg"
  },
  {
      "tourId": 4,
      "tourName": "Leaf Rake",
      "tourSite": "GDN-0011",
      "price": 19.95,
      "imageUrl": "http://www.villeta-cundinamarca.gov.co/MiMunicipio/PublishingImages/Paginas/Sitios-de-Interes/5314855.jpg"
  },
  {
      "tourId": 5,
      "tourName": "Leaf Rake",
      "tourSite": "GDN-0011",
      "price": 19.95,
      "imageUrl": "http://www.villeta-cundinamarca.gov.co/MiMunicipio/PublishingImages/Paginas/Sitios-de-Interes/5314855.jpg"
  },
  {
      "tourId": 6,
      "tourName": "Leaf Rake",
      "tourSite": "GDN-0011",
      "price": 19.95,
      "imageUrl": "http://www.villeta-cundinamarca.gov.co/MiMunicipio/PublishingImages/Paginas/Sitios-de-Interes/5314855.jpg"
  },
  {
      "tourId": 7,
      "tourName": "Leaf Rake",
      "tourSite": "GDN-0011",
      "price": 19.95,
      "imageUrl": "http://www.villeta-cundinamarca.gov.co/MiMunicipio/PublishingImages/Paginas/Sitios-de-Interes/5314855.jpg"
  },
  {
      "tourId": 8,
      "tourName": "Leaf Rake",
      "tourSite": "GDN-0011",
      "price": 19.95,
      "imageUrl": "http://www.villeta-cundinamarca.gov.co/MiMunicipio/PublishingImages/Paginas/Sitios-de-Interes/5314855.jpg"
  },
  {
      "tourId": 9,
      "tourName": "Leaf Rake",
      "tourSite": "GDN-0011",
      "price": 19.95,
      "imageUrl": "http://www.villeta-cundinamarca.gov.co/MiMunicipio/PublishingImages/Paginas/Sitios-de-Interes/5314855.jpg"
  },
  {
      "tourId": 10,
      "tourName": "Leaf Rake",
      "tourSite": "GDN-0011",
      "price": 19.95,
      "imageUrl": "http://www.villeta-cundinamarca.gov.co/MiMunicipio/PublishingImages/Paginas/Sitios-de-Interes/5314855.jpg"
  }
]

ngOnInit(): void {
    

  

    
    //this.turisticosService.getTuristicos()
     // .subscribe(arg => this.turistico = arg);
    
    
 
}

  



}
