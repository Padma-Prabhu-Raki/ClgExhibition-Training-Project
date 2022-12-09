import { Component, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { AddNewstudentComponent } from '../add-newstudent/add-newstudent.component';
import { StepperSelectorComponent } from '../stepper-selector/stepper-selector.component';
import { MatFormField, MatFormFieldAppearance, MatFormFieldControl } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { Router } from '@angular/router';
import { MatCard } from '@angular/material/card';
import { SampleServiceService } from '../sample-service.service';
import { MatSidenav } from '@angular/material/sidenav';
import { map, filter } from 'rxjs';

@Component({
  selector: 'app-headerdashboard',
  templateUrl: './headerdashboard.component.html',
  styleUrls: ['./headerdashboard.component.css']
})
export class HeaderdashboardComponent implements OnInit{
  k:any;

  dataSource:any;
  constructor(private dialog: MatDialog, private route:Router, private service:SampleServiceService) { }

  ngOnInit(): void {
    this.k = localStorage.getItem('email')

  }
  
  register(){
    this.route.navigate(['/jsondashboard'])

    window.location.reload();
  }

  events(){
    this.route.navigate(['/cards-exhibitions'])

    // window.location.reload();
  }
  
  wishlist(){
    // this.dataSource.pipe(filter((wish) => wish.wishness === true))

    this.route.navigate(['/wishlist'])

  }

  logout(){
    // localStorage.clear()
    localStorage.setItem('loginSuccessful','false')
    this.route.navigate(['/'])
  }
  
  details(){
    let b = (this.k)?.split('@',1)?.join(' ')

    let First_Name = b?.split('.')[0][0].toUpperCase() + b?.split('.')[0].substring(1)
    let fn = First_Name[0]?.toUpperCase()

    let Last_Name = b?.split('.')[1][0].toUpperCase() + b?.split('.')[1].substring(1)
    let ln = Last_Name[0]?.toUpperCase()

    return [fn, First_Name,Last_Name, ln]

  }

  // let {text:any, value:any} = 

  addStudent(){
    this.dialog.open(StepperSelectorComponent);

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(`Dialog Result: ${result}`);
    // });
  }

  searchName(data:any){
    this.service.searchItem(data)
  }
}
