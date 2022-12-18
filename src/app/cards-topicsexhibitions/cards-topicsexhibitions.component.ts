import { Component, OnDestroy,OnInit } from '@angular/core';
import { Event, NavigationStart, Router, RouterEvent, TitleStrategy } from '@angular/router';
import { Observable, of, map, filter, takeUntil, Subject } from 'rxjs';
import { SampleServiceService } from '../sample-service.service';
import { cardsInterface } from '../model';

@Component({
  selector: 'app-cards-topicsexhibitions',
  templateUrl: './cards-topicsexhibitions.component.html',
  styleUrls: ['./cards-topicsexhibitions.component.css']
})
export class CardsTopicsexhibitionsComponent implements OnDestroy,OnInit{

 
 cardDetails : Observable<cardsInterface[]> = of([])
 OnDestroySubscribe$ = new Subject<boolean>


 constructor(private service: SampleServiceService, private route:Router){}

  ngOnInit(): void {
    this.route.events.pipe(filter((routenav) => routenav instanceof NavigationStart)
    ).pipe(takeUntil(this.OnDestroySubscribe$)).subscribe((routenavurl:any) => {

      this.cardDetails = this.service.getCardDetails().pipe(map((cardData:any) => {
        if(routenavurl.url.includes('Conference')) {
          return cardData.filter((filteredCardDetails : any) => filteredCardDetails.domain === "Conference");
        } 

        else if(routenavurl.url.includes('Hardware')){ 
          return cardData.filter((filteredCardDetails : any) => filteredCardDetails.domain === "Hardware")
        }

        else if(routenavurl.url.includes('General-and-Political-Science')){
          return cardData.filter((filteredCardDetails:any) => filteredCardDetails.domain === "Political Science")
        }

        else if(routenavurl.url.includes('Software')){
          return cardData.filter((filteredCardDetails : any) => filteredCardDetails.domain === "Software")
        }

        else if(routenavurl.url.includes('Non-academic')){
          return cardData.filter((filteredCardDetails : any) => filteredCardDetails.domain === "Non-academic")
        }

        else if(routenavurl.url.includes('Space-Science')){
          return cardData.filter((filteredCardDetails : any) => filteredCardDetails.domain === "Space-Science")
        }
        else{
          return cardData}
      }))
    })
  }

  ngOnDestroy(): void {
    this.OnDestroySubscribe$.next(true);
    this.OnDestroySubscribe$.complete()
  }

}











