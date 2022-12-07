import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

export class Routerguard implements CanActivate{
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        let a=localStorage.getItem('loginSuccessful') ?? ''
        console.log(a)
        return JSON.parse(a)
        
        
        
        //  return true;
    }
}



// export class Routerguard {
// }
