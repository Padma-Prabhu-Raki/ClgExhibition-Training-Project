import { Component, OnInit } from '@angular/core';
import { Event, NavigationStart, Router, RouterEvent } from '@angular/router';
import { Observable, of, map, filter } from 'rxjs';
import { SampleServiceService } from '../sample-service.service';

@Component({
  selector: 'app-cards-topicsexhibitions',
  templateUrl: './cards-topicsexhibitions.component.html',
  styleUrls: ['./cards-topicsexhibitions.component.css']
})
export class CardsTopicsexhibitionsComponent implements OnInit{


 cardDetails : any;
  //  filteredCardDetails : any;

 constructor(private service: SampleServiceService, private route:Router){}


  //  ngOnInit(): void {
  //    this.service.getCardDetails().subscribe( getCardDetailsFromService =>{
  //     this.cardDetails = getCardDetailsFromService
  //     // console.log('----', getCardDetailsFromService)
  //    })
  //  }

  ngOnInit(): void {
    this.route.events.pipe(filter((routenav) => routenav instanceof NavigationStart)
    ).subscribe((routenavurl:any) => {
      // console.log('---', routenavurl);

      this.cardDetails = this.service.getCardDetails().pipe(map((cardData:any) => {
        if(routenavurl.url.includes('Conference')) {
          return cardData.filter((filteredCardDetails:any) => filteredCardDetails.domain === "Conference");
        } 

        else if(routenavurl.url.includes('Hardware')){ 
          return cardData.filter((filteredCardDetails:any) => filteredCardDetails.domain === "Hardware")
        }

        else if(routenavurl.url.includes('General-and-Political-Science')){
          return cardData.filter((filteredCardDetails:any) => filteredCardDetails.domain === "Political Science")
        }

        else if(routenavurl.url.includes('Software')){
          return cardData.filter((filteredCardDetails:any) => filteredCardDetails.domain === "Software")
        }

        else if(routenavurl.url.includes('Non-academic')){
          return cardData.filter((filteredCardDetails:any) => filteredCardDetails.domain === "Non-academic")
        }

        else if(routenavurl.url.includes('Space-Science')){
          return cardData.filter((filteredCardDetails:any) => filteredCardDetails.domain === "Space-Science")
        }
        else{
          return routenavurl.navigate(['cards-exhibitions']) 
        }
        // window.location.reload()
      }))
    })
  }
}


