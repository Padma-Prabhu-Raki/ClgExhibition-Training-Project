import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { SampleServiceService } from '../sample-service.service';

@Component({
  selector: 'app-editdashboard',
  templateUrl: './editdashboard.component.html',
  styleUrls: ['./editdashboard.component.css']
})
export class EditdashboardComponent {
  formdata:any
  StudentDetails:any
  constructor(private route:ActivatedRoute, private service:SampleServiceService){ }

  ngOnInit(){
    this.service.getStudentDetails(this.route.snapshot.params['id']).subscribe(getStudentById => {
      this.StudentDetails = getStudentById
      // console.log('---------',getStudentById)
    })
  }

  save(data:any){
    this.service.editELEMENT_DATA({ ...data, id:data['id']}).subscribe(editStudent => {
      window.location.reload();
      // console.log("-------d-------", d)
    })
}

}
