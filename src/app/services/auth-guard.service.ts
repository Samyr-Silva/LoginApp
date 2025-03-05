import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {
  
  constructor(private router: Router) { }

  canActivate(
    _next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    const authToken = sessionStorage.getItem("auth-token");

    if (authToken) {
      return of(true); // Retorna 'true' como Observable se o token estiver presente
    } else {
      this.router.navigate(["/login"]); // Redireciona para a página de login se o token não estiver presente
      return of(false); // Retorna 'false' como Observable se o token não estiver presente
    }
  }
}
