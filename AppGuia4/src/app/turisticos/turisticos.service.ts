import { Injectable } from '@angular/core';
import { ITuristico } from './turisticos';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TuristicosService {


    getTuristicos(): ITuristico[] {
        return [
            {
              "tourId": 1,
              "tourName": "VILLETA",
              "tourSite": "CUNDINAMARCA",
              "price": 10000,
              "imageUrl": "shorturl.at/krxOT"
            },
            {
                "tourId": 2,
                "tourName": "GIRARDOT",
                "tourSite": "GDN-0011",
                "price": 19.95,
                "imageUrl": "https://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
            },
            {
                "tourId": 3,
                "tourName": "MEDELLIN",
                "tourSite": "GDN-0011",
                "price": 19.95,
                "imageUrl": "https://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
            },
            {
                "tourId": 4,
                "tourName": "Leaf Rake",
                "tourSite": "GDN-0011",
                "price": 19.95,
                "imageUrl": "https://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
            },
            {
                "tourId": 5,
                "tourName": "Leaf Rake",
                "tourSite": "GDN-0011",
                "price": 19.95,
                "imageUrl": "https://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
            },
            {
                "tourId": 6,
                "tourName": "Leaf Rake",
                "tourSite": "GDN-0011",
                "price": 19.95,
                "imageUrl": "https://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
            },
            {
                "tourId": 7,
                "tourName": "Leaf Rake",
                "tourSite": "GDN-0011",
                "price": 19.95,
                "imageUrl": "https://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
            },
            {
                "tourId": 8,
                "tourName": "Leaf Rake",
                "tourSite": "GDN-0011",
                "price": 19.95,
                "imageUrl": "https://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
            },
            {
                "tourId": 9,
                "tourName": "Leaf Rake",
                "tourSite": "GDN-0011",
                "price": 19.95,
                "imageUrl": "https://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
            },
            {
                "tourId": 10,
                "tourName": "Leaf Rake",
                "tourSite": "GDN-0011",
                "price": 19.95,
                "imageUrl": "https://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
            }
          ]

        }
  

}
