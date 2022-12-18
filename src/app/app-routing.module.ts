import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollegeExhibitionComponent } from './college-exhibition/college-exhibition.component';
import { JsondashboardComponent } from './jsondashboard/jsondashboard.component';
import { AddNewstudentComponent } from './add-newstudent/add-newstudent.component';
import { SampleServiceService } from './sample-service.service';
import { SampledashboardComponent } from './sampledashboard/sampledashboard.component';
import { CardRoutingComponent } from './card-routing/card-routing.component';
import { EditdashboardComponent } from './editdashboard/editdashboard.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { ToggleSidenavComponent } from './toggle-sidenav/toggle-sidenav.component';
import { CompinteractdetailsComponent } from './compinteractdetails/compinteractdetails.component';
import { StepperSelectorComponent } from './stepper-selector/stepper-selector.component';
import { Routerguard } from './routerguard';
import { CanActivate } from '@angular/router';
import { CardsTopicsexhibitionsComponent } from './cards-topicsexhibitions/cards-topicsexhibitions.component';

const routes: Routes = [
  // {path:'', component: CollegeExhibitionComponent},
  // {path:'', component: SampledashboardComponent},
  // {path:'jsondashboard', component:JsondashboardComponent},
  {path:'stepper-selector', component:StepperSelectorComponent},
  {path:'', component:ToggleSidenavComponent},
  {path:'loginpage', component:LoginpageComponent},
  {path:'card-routing/:id', component:CardRoutingComponent},
  {path:'jsondashboard', canActivate:[Routerguard] , component:JsondashboardComponent},
  {path:'add-newstudent', component:AddNewstudentComponent},
  {path:'compinteractdetails', component:CompinteractdetailsComponent},
  {path: 'wishlist',  canActivate:[Routerguard] , component: JsondashboardComponent},
  {path:'cards-exhibitions',  canActivate:[Routerguard], component:CardsTopicsexhibitionsComponent, 
    children: [
      {
        path :'Conference',
        canActivate : [Routerguard],
        component : CardsTopicsexhibitionsComponent
      },
      {
        path : 'Hardware',
        canActivate : [Routerguard],
        component : CardsTopicsexhibitionsComponent
      },
      {
        path : 'General-and-Political-Science',
        canActivate : [Routerguard],
        component : CardsTopicsexhibitionsComponent
      },
      {
        path : 'Software',
        canActivate : [Routerguard],
        component : CardsTopicsexhibitionsComponent
      },
      {
        path : 'Non-academic',
        canActivate : [Routerguard],
        component : CardsTopicsexhibitionsComponent
      },
      {
        path : 'Space-Science',
        canActivate : [Routerguard],
        component : CardsTopicsexhibitionsComponent
      },
    ]
  },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
