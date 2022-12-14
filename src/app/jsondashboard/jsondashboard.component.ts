import { Component, OnInit, OnDestroy,Inject} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Data } from '@angular/router';
import { filter, map, Observable, of, windowWhen } from 'rxjs';
import { SampleServiceService } from '../sample-service.service';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AddNewstudentComponent } from '../add-newstudent/add-newstudent.component';
import { StepperSelectorComponent } from '../stepper-selector/stepper-selector.component';
// import { MatTable } from '@angular/material/table';
import { HeaderdashboardComponent } from '../headerdashboard/headerdashboard.component';
import { clgExhibitionInterface } from '../model';

@Component({
  selector: 'app-jsondashboard',
  templateUrl: './jsondashboard.component.html',
  styleUrls: ['./jsondashboard.component.css']
})
export class JsondashboardComponent implements OnInit, OnDestroy{
  displayedColumns: string[] = ['id', 'name', 'email', 'mobile', 'reg_no', 'dept', 'topic', 'duration','menubar','wishness'];
  dataSource : Observable<clgExhibitionInterface[]>= of([])

  deleteDataSubscription :any;
  editWishSubscription : any;
  
  wishing:any;

  constructor(private service:SampleServiceService, private router:Router, 
                public dialog:MatDialog, private route: Router) {}

  ngOnInit(){
    this.service.getELEMENT_DATA()
    if(this.route.url.includes('jsondashboard')) {
      this.dataSource = this.service.dataEvent$ 
    }
    else {
      this.dataSource = this.service.dataEvent$.pipe(map((interestedData:any) => {
        return (interestedData.filter((wish:any) => wish.wishness))
      }))
    }
  }

  ngOnDestroy(){
    this.deleteDataSubscription?.unsubscribe();
    this.editWishSubscription?.unsubscribe();
  }

  register(){
    this.router.navigate(['/jsondashboard'])

    window.location.reload();
  }

  events(){
    this.router.navigate(['/cards-exhibitions'])
  }
  
  wishlist(data : any){
    this.route.navigate(['wishlist'])
  }

  logout(){
    localStorage.setItem('loginSuccessful','false')
    this.router.navigate(['/'])
  }

  editRow(ele:any){
    this.dialog.open(StepperSelectorComponent,{
      data: {
        ...ele,
        showEdit:true,
        editHeading:true,
      },
      disableClose: true
    });
  }

  deleteRow(id:string){
    this.deleteDataSubscription = this.service.deleteELEMENT_DATA(id).subscribe(() => {
    })
    window.location.reload();
  }
  
  funct(id:string){
    this.router.navigate(['/card-routing', id]);
  }


  editfav(element:any){
    this.editWishSubscription = this.service.updatewish(element).subscribe(() => {
      window.location.reload();
    })
  }
}

