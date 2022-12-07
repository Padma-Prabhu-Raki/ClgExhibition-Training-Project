import { Component, OnInit, Inject} from '@angular/core';
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

@Component({
  selector: 'app-jsondashboard',
  templateUrl: './jsondashboard.component.html',
  styleUrls: ['./jsondashboard.component.css']
})
export class JsondashboardComponent implements OnInit{
  displayedColumns: string[] = ['id', 'name', 'email', 'mobile', 'reg_no', 'dept', 'topic', 'duration','menubar','wishness'];
  dataSource : Observable<any>= of([{}])

  dataStudent: Observable<any> = of([{}])
  
  wishing:any;

  constructor(private service:SampleServiceService, private router:Router, 
                public dialog:MatDialog, private route: Router) {}

  ngOnInit(){

    console.log('---url---',this.route.url)
    this.service.getELEMENT_DATA()
    // this.service.getStudents()
    if(this.route.url.includes('jsondashboard')) {
      this.dataSource = this.service.dataEvent$
    }
    else {
      this.dataSource = this.service.dataEvent$.pipe(map((n:any) => {
        console.log('----',n)
  
        return (n.filter((wish:any) => wish.wishness))
      }))
    }

    this.dataStudent = this.service.dataEvent$

    





    // this.wishing = this.service.getELEMENT_DATA().pipe(filter((n:any) => n.wishness === true))
  }

  register(){
    this.router.navigate(['/jsondashboard'])

    window.location.reload();
  }

  events(){
    this.router.navigate(['/cards-exhibitions'])
  }
  
  wishlist(data:any){
    // this.dataSource.pipe(filter((wish) => wish.wishness === true))
    this.route.navigate(['wishlist'])
    // this.dataSource = this.service.getELEMENT_DATA().pipe(map((n:any) => {
    //   console.log('----',n)

    //   return (n.filter((wish:any) => wish.wishness))
    // }))
  }

  logout(){
    // localStorage.clear()
    localStorage.setItem('loginSuccessful','false')
    // console.log(localStorage.)
    this.router.navigate(['/'])
  }

  editRow(ele:any){
    // this.service.createELEMENT_DATA({
    //   id:1,
    //   name: "Simran",
    //   reg_no: 123,
    //   dept: "CSE",
    //   topic: "Software",
    //   duration : 6
    //     }).subscribe(d => {
    //   console.log("----------------------", d)
    // })

    // this.service.editELEMENT_DATA({}).subscribe(d => {
    //   console.log('----------',d)
    // })
    // this.router.navigate(['add-newstudent',id]);
    this.dialog.open(StepperSelectorComponent,{
      data: {
        ...ele,
        showEdit:true,
        editHeading:true,
      },
      disableClose: true
    });

    // window.location.reload();
  }

  deleteRow(id:any){
    // console.log('---ele====', element)
    this.service.deleteELEMENT_DATA(id).subscribe(x => {
      console.log('------', x)
    })
    window.location.reload();
  }
  
  funct(id:any){
    this.router.navigate(['/card-routing', id]);
  }


  editfav(element:any){
    this.service.updatewish(element).subscribe(d => {
      window.location.reload();
      console.log('--d: --', d)
      
    })
  }
}

