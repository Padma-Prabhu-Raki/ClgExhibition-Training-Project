import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Subject, BehaviorSubject, Observable, filter } from 'rxjs';
import { clgExhibitionInterface } from './model';

@Injectable({
  providedIn: 'root'
})
export class SampleServiceService {

  private dataSubject$ = new Subject<clgExhibitionInterface[]>();
  dataEvent$ = this.dataSubject$.asObservable();

  data: clgExhibitionInterface[]=[];

  
  API_URL = 'http://localhost:3000/clgExhibition';

  API_URL2 = 'http://localhost:3000/cards'

  login_URL = 'https://reqres.in/api/login'

  constructor(private http: HttpClient) { }

  getELEMENT_DATA(){
     this.http.get(this.API_URL).subscribe((searc:any) => {
      this.dataSubject$.next(searc);
      this.data = searc;
    })
  }
  
  
  createELEMENT_DATA(data : any): Observable<any> {
    // console.log('---data----', data)
    return this.http.post(`${this.API_URL}`,data);
  }


  deleteELEMENT_DATA(id:any) : Observable<any> {
    // console.log(id)
    return this.http.delete(`${this.API_URL}/${id}`);
  }

  editELEMENT_DATA(data:any) : Observable<any> {
    return this.http.put(`${this.API_URL}/${data.id}`,data);
  }

  getStudentDetails(id: any){
    return this.http.get(`${this.API_URL}/${id}`)
  }

  loginpageurl(data: any) : Observable<any> {
    return this.http.post(`${this.login_URL}`, data) 
  }

  getCardDetails(){
    return this.http.get(`${this.API_URL2}`)
  }

  getStudentwishlist(wishness:any): Observable<any> {
    return this.http.get(`${this.API_URL}/${wishness}`)
  }


  updatewish(data:clgExhibitionInterface){
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

}


