import { Component, OnDestroy,OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { SampleServiceService } from '../sample-service.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-editdashboard',
  templateUrl: './editdashboard.component.html',
  styleUrls: ['./editdashboard.component.css']
})
export class EditdashboardComponent implements OnDestroy,OnInit{
  formdata:any
  StudentDetails:any

  DestroySubs$ = new Subject<boolean>

  constructor(private route:ActivatedRoute, private service:SampleServiceService){ }

  ngOnInit(){
    this.service.getStudentDetails(this.route.snapshot.params['id']).pipe(takeUntil(this.DestroySubs$)).subscribe(getStudentById => {
      this.StudentDetails = getStudentById
    })
  }

  ngOnDestroy(): void {
    this.DestroySubs$.next(true);
    this.DestroySubs$.complete();
  }

  save(data:any){
    this.service.editELEMENT_DATA({ ...data, id:data['id']}).pipe(takeUntil(this.DestroySubs$)).subscribe(editStudent => {
      window.location.reload();
    })
}

}
