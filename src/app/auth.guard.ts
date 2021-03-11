import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  

  constructor(private router: Router) {}
  canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(sessionStorage.getItem('Admin')== null)
    {
      this.router.navigate(['/login']);
      return false;
    }  
    if (sessionStorage.getItem('Admin').length == 0 ) {
        this.router.navigate(['/login']);
        return false;
      }
      return true;
  }
  canDeactivate()
  {return false;}

}
