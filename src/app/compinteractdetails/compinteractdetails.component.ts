import { Component, Input,Output, EventEmitter, OnInit } from '@angular/core';
import { SampleServiceService } from '../sample-service.service';

@Component({
  selector: 'app-compinteractdetails',
  templateUrl: './compinteractdetails.component.html',
  styleUrls: ['./compinteractdetails.component.css']
})
export class CompinteractdetailsComponent implements OnInit{

  constructor(private service:SampleServiceService){ }

  @Input() Studentdetails:any;

  @Output() editEvent = new EventEmitter<any>;
  @Output() deleteEvent = new EventEmitter<any>;

  ngOnInit() {
  }

  editchild(){
    this.editEvent.emit(this.Studentdetails)
  }
  
  deletechild(){
    this.deleteEvent.emit(this.Studentdetails)
  }
}
