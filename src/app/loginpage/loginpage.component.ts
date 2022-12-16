import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { JsondashboardComponent } from '../jsondashboard/jsondashboard.component';
import { AddNewstudentComponent } from '../add-newstudent/add-newstudent.component';
import { SampleServiceService } from '../sample-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent{

  formdata:any

  constructor(private _snackBar:MatSnackBar, private service:SampleServiceService, 
            private router:Router, private route:ActivatedRoute,
            ){}

  ngOnInit(): void {
    this.formdata = new FormGroup({
      email : new FormControl('', Validators.required),
      password : new FormControl('', Validators.required)
    })
  }

  login(data:any){
<<<<<<< HEAD
    this.service.loginpageurl(data).subscribe(loginData => {
=======
    // console.log('----',data)
    this.service.loginpageurl(data).subscribe(loginData => {
      // console.log('-----',loginData)
      // console.log('--------',(data['email']).split('@'))
>>>>>>> master
      localStorage.setItem('loginSuccessful','true') 
      localStorage.setItem('email',(data.email))

      this.router.navigate(['/jsondashboard'])});
    }
  }

