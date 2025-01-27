import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginResponse } from '../types/login-response.types';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private httpCLient: HttpClient,
  ) { }

  login(name: string, password: string){
    return this.httpCLient.post<LoginResponse>("/login", {name, password}).pipe(
      tap((value) =>{
        sessionStorage.setItem("auth_token", value.token)
        sessionStorage.setItem("username", value.name)
      })
    )
  }
} 
 