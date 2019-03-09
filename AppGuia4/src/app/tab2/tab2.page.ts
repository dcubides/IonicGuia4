import { PaisesService } from './../api/paises.service';
import { Component, OnInit  } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private paisesService: PaisesService) {

  }

  paises: any[] = [];
  errorMessage = '';
  filtro: any[] = [];
  filteredProducts: any[] = [];

  //listFilter: string = 'America';

  ngOnInit(): void {
    

    this.paisesService.obtenerPaises().subscribe(
      paises =>{
        this.paises = paises;
        
      },
      error => this.errorMessage = <any>error
      
    );
    console.log(this.paises);
  }

  turistiar(){
    
  }


}
