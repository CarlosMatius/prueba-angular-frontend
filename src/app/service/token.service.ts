import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

const TOKEN_KEY = 'access_token';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private route : Router) { }

  public setToken(token: string): void{
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(){
    return sessionStorage.getItem(TOKEN_KEY);
  }
  
  public logOut(): void {
    window.sessionStorage.clear();
    this.route.navigate(['/login'])
  }
}