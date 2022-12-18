import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { MatStepperPrevious, MatStepperNext, MatStepper } from '@angular/material/stepper';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatInput } from '@angular/material/input';
import { MatFormField, MatFormFieldAppearance, MatFormFieldControl, MatFormFieldDefaultOptions } from '@angular/material/form-field';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSelectService } from '../mat-select.service';
import { SampleServiceService } from '../sample-service.service';
import { Country, State, City }  from 'country-state-city';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-stepper-selector',
  templateUrl: './stepper-selector.component.html',
  styleUrls: ['./stepper-selector.component.css']
})
export class StepperSelectorComponent implements OnDestroy,OnInit{
  states:any

  OndestroySubs$ =new Subject<boolean>

  constructor(private _formBuilder: FormBuilder, private _snackBar: MatSnackBar, 
              private dialog:MatDialog, private service:SampleServiceService,
              @Inject(MAT_DIALOG_DATA) public data:any){ }

  ngOnInit(): void {
    this.countries = Country.getAllCountries() 

    this.formGroup6 = new FormGroup({
      country : this.country,
      state : this.state
    })

    this.country.valueChanges.pipe(takeUntil(this.OndestroySubs$)).subscribe((countryName:any) => {
      this.states = State.getStatesOfCountry(countryName.isoCode)

    })
  }

  
  ngOnDestroy(): void {
    this.OndestroySubs$.next(true);
    this.OndestroySubs$.complete()
  }

  formGroup1 = this._formBuilder.group(
    { id : (this.data?.id ?? '') ,
      name : [this.data?.name ?? '', Validators.required]
      // { name : ['', Validators.required],}
    } 
  );

  formGroup2 = this._formBuilder.group(
    { email : [this.data?.email ?? '', Validators.required],
      mobile : [this.data?.mobile ?? '', Validators.required],
    }
  );

  formGroup3 = this._formBuilder.group(
    { dept : this.data?.dept ?? '',
      reg_no : [this.data?.reg_no ?? '', Validators.required],
    }
  );

  formGroup4 = this._formBuilder.group(
    { topic : this.data?.topic ?? '',
      duration : [this.data?.duration ?? '', Validators.required],
    }
  );

  formGroup5 = this._formBuilder.group(
    { address1 : '',
      address2 : '',
    }
  );

  formGroup6 :any
    
  country = new FormControl(null, Validators.required)
  state = new FormControl(null, Validators.required)

  countries:any

  formGroup7 = this._formBuilder.group(
    { gender: [this.data?.gender ?? '', Validators.required],}
  ); 
  // }
    

  submit(data:any){
    this.service.createELEMENT_DATA({ ...data, id:data['id']}).pipe(takeUntil(this.OndestroySubs$)).subscribe(createStudent => {
    });
  
    this.dialog.closeAll();
  } 


  updatefn(){
    this.service.editELEMENT_DATA({...this.formGroup1.value, ...this.formGroup2.value,
      ...this.formGroup3.value, ...this.formGroup4.value,
      }).pipe(takeUntil(this.OndestroySubs$)).subscribe(updateStudentData => {
      window.location.reload();
    });
    this.dialog.closeAll();
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

  form1(){
    this.formGroup1.value;
  }

  form2(){
    this.formGroup2.value;
  }

  form3(){
    this.formGroup3.value;
  }

  form4(){
    this.formGroup4.value;
  }

  form5(){
    this.formGroup5.value;
  }

  form6(){
    this.formGroup6.value;
  }

  form7(){
    this.formGroup7.value;
    
    this.service.createELEMENT_DATA({...this.formGroup1.value, ...this.formGroup2.value,
                                    ...this.formGroup3.value, ...this.formGroup4.value,
                                    }).pipe(takeUntil(this.OndestroySubs$)).subscribe(submittingStudentData =>{
                                    })
                                    this.dialog.closeAll();

  }

}



