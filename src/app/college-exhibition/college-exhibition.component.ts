import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-college-exhibition',
  templateUrl: './college-exhibition.component.html',
  styleUrls: ['./college-exhibition.component.css']
})
export class CollegeExhibitionComponent implements OnInit{
  clgExhibition:any;
  constructor() { }

  ngOnInit(): void {
    this.clgExhibition = new FormGroup({
      reg_no : new FormControl('', [Validators.required, Validators.maxLength(12)]),
      Name : new FormControl('', [Validators.required]),
      dept : new FormControl('', [Validators.nullValidator]),
      topic : new FormControl('', [Validators.nullValidator]),
      duration : new FormControl('', [Validators.required, Validators.max(10)])
    })
  }

  submit(data:any){
    return data
    // console.log('--------------',data)
  }
}

