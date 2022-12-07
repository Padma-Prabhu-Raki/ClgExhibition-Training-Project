import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {MatDialog } from '@angular/material/dialog';
import { SampleServiceService } from '../sample-service.service';
// import { MatButton } from '@angular/material/button';
import { JsondashboardComponent } from '../jsondashboard/jsondashboard.component';

@Component({
  selector: 'app-toggle-sidenav',
  templateUrl: './toggle-sidenav.component.html',
  styleUrls: ['./toggle-sidenav.component.css']
})
export class ToggleSidenavComponent {
    constructor(private dialog:MatDialog ,private router:ActivatedRoute, private route:Router){}

    sidenavhome(){

      this.route.navigate(['jsondashboard'])
    }
}
