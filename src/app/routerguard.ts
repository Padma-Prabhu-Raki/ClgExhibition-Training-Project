import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

export class Routerguard implements CanActivate{
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        let checkingLogin = localStorage.getItem('loginSuccessful') ?? ''
<<<<<<< HEAD
        console.log(checkingLogin)
=======
        // console.log(checkingLogin)
>>>>>>> master
        return JSON.parse(checkingLogin)
        
        
        
        //  return true;
    }
}



// export class Routerguard {
// }
