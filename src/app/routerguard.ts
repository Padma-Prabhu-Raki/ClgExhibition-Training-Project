import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

export class Routerguard implements CanActivate{
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        let checkingLogin = localStorage.getItem('loginSuccessful') ?? ''
        // console.log(checkingLogin)
        console.log(checkingLogin)
        return JSON.parse(checkingLogin)
        
        
        
        //  return true;
    }
}



// export class Routerguard {
// }
