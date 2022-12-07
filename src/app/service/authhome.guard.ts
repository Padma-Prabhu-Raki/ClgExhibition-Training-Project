import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SampleServiceService } from '../sample-service.service';
import { Router } from '@angular/router';

interface canActivate{
//   canActivate(){

//   }
}

@Injectable({
  providedIn: 'root'
})
export class AuthhomeGuard implements CanActivate {
  constructor(private service:SampleServiceService, private router:Router){}
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  
}
