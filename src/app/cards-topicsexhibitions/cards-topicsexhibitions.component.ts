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
    console.log('---', routenavurl);

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
        return routenavurl.url.navigate(['cards-exhibitions']) 
      }
      // window.location.reload()
    }))
  })
  // if(this.route.url.includes('cards-exhibitions')){
    // this.cardDetails = this.service.getCardDetails().pipe(map((cardData:any) => {
    //   if(this.route.url.includes('Conference')) {
    //     return cardData.filter((filteredCardDetails:any) => filteredCardDetails.domain === "Conference");
    //   } 

    //   else if(this.route.url.includes('Hardware')){
    //     return cardData.filter((filteredCardDetails:any) => filteredCardDetails.domain === "Hardware")
    //   }

    //   else if(this.route.url.includes('General-and-Political-Science')){
    //     return cardData.filter((filteredCardDetails:any) => filteredCardDetails.domain === "Political Science")
    //   }

    //   else if(this.route.url.includes('Software')){
    //     return cardData.filter((filteredCardDetails:any) => filteredCardDetails.domain === "Software")
    //   }

    //   else if(this.route.url.includes('Non-academic')){
    //     return cardData.filter((filteredCardDetails:any) => filteredCardDetails.domain === "Non-academic")
    //   }

    //   else if(this.route.url.includes('Space-Science')){
    //     return cardData.filter((filteredCardDetails:any) => filteredCardDetails.domain === "Space-Science")
    //   }
    //   else{
    //     return this.route.navigate(['cards-exhibitions']) 
    //   }
    //   // window.location.reload()
    // }))
  }
}

  // if(this.route.url.includes('Hardware')){
  //   this.cardDetails = this.service.getCardDetails().pipe(map((cardData:any) => {
  //     return cardData.filter((cardDomain:any) => (cardDomain.domain === "Hardware"))
  //   }))
  // }
  // if(this.route.url.includes('General-and-Political-Science')){
  //   this.cardDetails = this.service.getCardDetails().pipe(map((cardData:any) => {
  //     return cardData.filter((cardDomain:any) => (cardDomain.domain === "General and Political Science"))
  //   }))
  // }
  // if(this.route.url.includes('Software')){
  //   this.cardDetails = this.service.getCardDetails().pipe(map((cardData:any) => {
  //     return cardData.filter((cardDomain:any) => (cardDomain.domain === "Software"))
  //   }))
  // }
  // if(this.route.url.includes('Non-academic')){
  //   this.cardDetails = this.service.getCardDetails().pipe(map((cardData:any) => {
  //     return cardData.filter((cardDomain:any) => (cardDomain.domain === "Non-academic"))
  //   }))
  // }
  // if(this.route.url.includes('Space-Science')){
  //   this.cardDetails = this.service.getCardDetails().pipe(map((cardData:any) => {
  //     return cardData.filter((cardDomain:any) => (cardDomain.domain === "Space-Science"))
  //   }))
  // }










// Previous cards:

  // cards=[
  //   {
  //     title : 'CodingFest',
  //     topic: 'Coding Competition',
  //     domain : 'Software',
  //     description : 'Testing of Analytic skills and to be a faster code challenger.',
  //     image : 'https://cdn5.f-cdn.com/contestentries/1145423/26732064/59d068685ff95_thumb900.jpg'
  //   },
  //   {
  //     title : 'Technical Exhibition',
  //     topic : 'Project Presentation',
  //     domain : 'Presentation',
  //     description : 'Lets have a chance to be a good presentator and good inventor.',
  //     image : 'https://previews.123rf.com/images/wowomnom/wowomnom1802/wowomnom180200008/95612499-creative-process-concept-a4-page-for-web-poster-presentation-vector-creative-bright-illustration-of-.jpg'
  //   },
  //   {
  //     title: 'National Level Symposium',
  //     topic : 'Technical Quiz and Paper Presentation',
  //     domain : 'Software',
  //     description : 'i) MCQs on algorithms and brain-analytic quizzes on basics of Programming languages. \n ii) Presentation is welcomed from aspirants having knowledge on latest Technologies. ',
  //     image : 'https://png.pngtree.com/thumb_back/fh260/back_our/20190621/ourmid/pngtree-recruiting-the-strongest-brain-recruitment-poster-image_189760.jpg'
  //   },
  //   {
  //     title : 'Hardware Exhibition',
  //     topic : 'Circuit Debugging and PCB Design',
  //     domain : 'Hardware',
  //     description : 'have a great knowledge in electronic field and to make a circuit board and to debug.',
  //     image : 'https://www.knowafest.com/files/uploads/circuitron%202018.jpg'
  //   },
  //   {
  //     title: 'Technical Workshop & Conference on Software Defined Networking(SDN)',
  //     topic : 'AutoCAD and MATLAB ',
  //     domain : 'cORE',
  //     description : 'Workshop on Creative design of circuit related things and advanced machinaries design using AutoCAD & MATLAB.' + '\n' + 'Conference conducted by experienced Instrialists people detailed report on advanced Mobile Networks and Get a clear knowledge on basics, working of SDN and its impact in future.',
  //     image:'https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/112825156/original/d1e86b9a45d5fba30d0382f07f67c3d61b6cde6d/do-your-matlab-and-autocad-projects.jpg'
  //   },
  //   {
  //     title : 'Non-Technical(Cultural) Event',
  //     topic : 'Cultural Events',
  //     domain : 'Software/Industrialists',
  //     description : 'All cultural events like Singing, Dance, MIME etc., and non-cultural events like ShortFilm Making, Photography Contest etc.,',
  //     image : 'https://miro.medium.com/max/500/1*Y0NjhuKAG_v8BniUqfcS6Q.jpeg'
  //   }
  // ]}
