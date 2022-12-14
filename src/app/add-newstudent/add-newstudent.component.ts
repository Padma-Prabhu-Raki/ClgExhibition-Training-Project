import { createInjectableType } from '@angular/compiler';
import { Component, OnDestroy, Inject, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { SampleServiceService } from '../sample-service.service';
import { MatFormField,  MatFormFieldAppearance, MatFormFieldControl, MatFormFieldDefaultOptions} from '@angular/material/form-field';
import { MatSnackBar } from '@angular/material/snack-bar';
import {Subject, takeUntil} from 'rxjs';

@Component({
  selector: 'app-add-newstudent',
  templateUrl: './add-newstudent.component.html',
  styleUrls: ['./add-newstudent.component.css']
})
export class AddNewstudentComponent implements OnDestroy,OnInit{
  formdata: any;
  editDetails: any;

  OnDestroySubject$ = new Subject<boolean>

  constructor(public dialog:MatDialog, private service: SampleServiceService, private route:ActivatedRoute,
          @Inject(MAT_DIALOG_DATA) public data: any,
          private _snackBar:MatSnackBar){ }


  ngOnInit(): void {
    this.formdata = new FormGroup({
      id : new FormControl(this.data?.id ?? ''),
      name : new FormControl(this.data?.name ? this.data?.name : '', [Validators.required]),
      reg_no : new FormControl(this.data?.reg_no ? this.data?.reg_no : '', [Validators.required, Validators.maxLength(12)]),
      dept : new FormControl(this.data?.dept ?? ''),
      topic : new FormControl(this.data?.topic ?? ''),
      duration : new FormControl(this.data?.duration ? this.data?.duration : '', [Validators.required, Validators.max(10)])
    });
  }

  ngOnDestroy(): void {
    this.OnDestroySubject$.next(true);
    this.OnDestroySubject$.complete()
  }

  submit(data:any){
    this.service.createELEMENT_DATA({ ...data, id:data['id']}).pipe(takeUntil(this.OnDestroySubject$)).subscribe(() => {
    });

    this.dialog.closeAll();
  }

  updatefn(editData:any){
    this.service.editELEMENT_DATA(editData).pipe(takeUntil(this.OnDestroySubject$)).subscribe(editStudentData => {
      window.location.reload();
    });
  }

  cancel(){
    this.dialog.closeAll();
  }

  snackbar(){
    this._snackBar.open('Registered Sucessfully','Thanks for your Interest, We will Update you Soon')
  }

  updatesnackbar(){
    this._snackBar.open('Your Details has been Updated Successfully...')
  }

  opensnackbar(){
    this._snackBar.open('Thanks for Visting our Page')
  }
}
