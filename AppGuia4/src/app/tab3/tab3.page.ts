import { Component, ViewChild  } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

import { PaisesService } from './../api/paises.service';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  constructor(private paisesService: PaisesService) {}

  paises: any[] = [];
  errorMessage = '';

  ngOnInit(): void {
    this.paisesService.obtenerPaises().subscribe(
      paises =>{
       this.paises = paises;
      },
     error => this.errorMessage = <any>error
      
    );
    console.log(this.paises);
  }

  loadData(event) {
    setTimeout(() => {
      console.log('Done');
      event.target.complete();

      // App logic to determine if all data is loaded
      
      this.paisesService.obtenerPaises().subscribe(
        paises =>{
          this.paises = paises;
        },
        error => this.errorMessage = <any>error
        
      ); 

  

      // and disable the infinite scroll
      if (this.paises.length == 1000) {
        console.log(this.paises.length)
        event.target.disabled = true;
      }
    }, 500);
  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
    console.log("pp");
  }

}
