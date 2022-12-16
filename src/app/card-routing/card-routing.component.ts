import { Component, OnDestroy,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { SampleServiceService } from '../sample-service.service';
import { AddNewstudentComponent } from '../add-newstudent/add-newstudent.component';
import { StepperSelectorComponent } from '../stepper-selector/stepper-selector.component';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-card-routing',
  templateUrl: './card-routing.component.html',
  styleUrls: ['./card-routing.component.css']
})
export class CardRoutingComponent implements OnInit,OnDestroy{
  Studentdetails:any
  onDestroy$ = new Subject<boolean>
  
  constructor(private route:ActivatedRoute, private dialog:MatDialog, private service:SampleServiceService,
              private router:Router){ }

  ngOnInit(){
<<<<<<< HEAD
    this.service.getStudentDetails(this.route.snapshot.params['id']).pipe(takeUntil(this.onDestroy$)).subscribe(getStudentById => {
      this.Studentdetails = getStudentById
=======
    // console.log(this.route.snapshot.params)
    this.service.getStudentDetails(this.route.snapshot.params['id']).subscribe(getStudentById => {
      this.Studentdetails = getStudentById
      // console.log('---------',getStudentById)
>>>>>>> master
    })
  }

  ngOnDestroy(): void {
    this.onDestroy$.next(true);
    this.onDestroy$.complete();
  }

  editclick(Studentdetails:any){
    this.dialog.open(StepperSelectorComponent,{
      data: {
        ...Studentdetails,
        showEdit : true,
        editHeading : true
      }
    });
  }

  deleteclick(Studentdetails:any){
<<<<<<< HEAD
    this.service.deleteELEMENT_DATA(Studentdetails.id).pipe(takeUntil(this.onDestroy$)).subscribe(deleteStudent => {
      this.router.navigate(['jsondashboard'])
=======
    this.service.deleteELEMENT_DATA(Studentdetails.id).subscribe(deleteStudent => {
      this.router.navigate(['jsondashboard'])
      console.log("------",deleteStudent)
>>>>>>> master
    });
  }
}
