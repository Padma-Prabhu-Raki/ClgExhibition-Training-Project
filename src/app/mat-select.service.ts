import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {throwError} from 'rxjs';
import { catchError} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class MatSelectService {

  apicountrystatecity = 'https://localhost/dev/tcxapp/ ';
  
  constructor(private http:HttpClient) { }

  getCountries(){
    return this.http.get(`${this.apicountrystatecity}api/countries`).pipe(
      catchError(this.handleError)
    );
  }

  getStates(countryId:number){
    return this.http.get(`${this.apicountrystatecity}api/states/${countryId}`).pipe(
      catchError(this.handleError)
    );
  }

  getCities(stateId:number){
    return this.http.get(`${this.apicountrystatecity}api/cities/${stateId}`).pipe(
      catchError(this.handleError)
    )
  }
  
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occured', error.error.message);
    }

    else{
      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`)
    }

    return throwError('Something went wrong. Please try again later');
  }
}
