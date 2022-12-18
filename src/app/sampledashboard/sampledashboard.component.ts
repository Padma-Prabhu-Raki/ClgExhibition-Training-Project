import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import {filter, find, map, take} from 'rxjs';
// import { SampleServiceService } from '../sample-service.service';


export interface sampledashboard {
  s_no : number;
  reg_no : number;
  name: string;
  dept: string;
  topic: string;
  duration: number;
}

 const ELEMENT_DATA:Data[] = []
//   {s_no:1, reg_no: 123, name: 'Madhumitha', dept:'ECE', topic : 'Science', duration: 10},
//   {s_no:2, reg_no: 456, name: 'Sindhuja', dept:'ECE', topic : 'Science', duration: 10},
//   {s_no:3, reg_no: 678, name: 'Miracline', dept:'ECE', topic : 'Science', duration: 10},
//   {s_no:4, reg_no: 876, name: 'Simran', dept:'CSE', topic : 'Science', duration: 10},
//   {s_no:5, reg_no: 654, name: 'Prathin', dept:'CSE', topic : 'Software', duration: 10},
//   {s_no:6, reg_no: 321, name: 'Melvin', dept:'MECH', topic : 'Software', duration: 10},
//   {s_no:7, reg_no: 452, name: 'Mahidhar', dept:'ECE', topic : 'Software', duration: 10},
//   {s_no:8, reg_no: 424, name: 'Prabhu', dept:'ECE', topic : 'Software', duration: 10},
  
// ];

@Component({
  selector: 'app-sampledashboard',
  templateUrl: './sampledashboard.component.html',
  styleUrls: ['./sampledashboard.component.css']
})
export class SampledashboardComponent{
  displayedColumns: string[] = ['id','email','first_name','last_name','avatar'];
  dataSource : any;

}
