import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Subject, BehaviorSubject, Observable, filter } from 'rxjs';
import * as countrycitystatejson from 'country-state-city';
// import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

// interface CanActivate {
//   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree
// }


@Injectable({
  providedIn: 'root'
})
export class SampleServiceService {

  // fromService='This is from Service'
  // private message = new BehaviorSubject<string>('default message');
  // getMessage = this.message.asObservable();

  private dataSubject$ = new Subject<any>();
  dataEvent$ = this.dataSubject$.asObservable();

  data:any;

  
  API_URL = 'http://localhost:3000/clgExhibition';

  API_URL2 = 'http://localhost:3000/cards'

  login_URL = 'https://reqres.in/api/login'

  constructor(private http: HttpClient) { }

  // updateMessage(msg: string) {
  //   console.log('----msg---', msg)
  //   this.message.next(msg);
  // }

  // getELEMENT_DATA(){
  //   return this.http.get(this.API_URL)
  // }

  getELEMENT_DATA(){
     this.http.get(this.API_URL).subscribe(searc => {
      this.dataSubject$.next(searc);
      this.data = searc;
    })
  }
  
  
  createELEMENT_DATA(data : any): Observable<any> {
    // console.log('---data----', data)
    return this.http.post(`${this.API_URL}`,data);
  }


  deleteELEMENT_DATA(id: any) : Observable<any> {
    // console.log(id)
    return this.http.delete(`${this.API_URL}/${id}`);

    // return this.http.delete('http://localhost:3000/clgExhibition/1');
  }

  editELEMENT_DATA(data:any) : Observable<any> {
    return this.http.put(`${this.API_URL}/${data.id}`,data);
  }

  getStudentDetails(id:any){
    return this.http.get(`${this.API_URL}/${id}`)
  }

  loginpageurl(data: any) : Observable<any> {
    // console.log('------', data)
    return this.http.post(`${this.login_URL}`, data) 
  }

  getCardDetails(){
    return this.http.get(`${this.API_URL2}`)
  }

  getStudentwishlist(wishness:any): Observable<any> {
    return this.http.get(`${this.API_URL}/${wishness}`)
  }


  updatewish(data:any){
    const newData ={
      ...data,
      wishness : !data.wishness
    }

    return this.http.put(`${this.API_URL}/${data.id}`,newData)
  }

  searchItem(searc:any){
    this.dataSubject$.next(
      this.data?.filter((val:any) => val.name.toLowerCase().includes(searc.toLowerCase())))
  }

  // 28-11-2022
  
  // getCountries() {
  //   return this.countryData.getCountries();
  // }

  // getStatesByCountry(countryShotName: string) {
  //   return this.countryData.getStatesByShort(countryShotName);
  // }

  // getCitiesByState(country: string, state: string) {
  //   return this.countryData.getCities(country, state);
  // }



}


