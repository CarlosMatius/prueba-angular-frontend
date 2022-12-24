import { JwtResponse } from './../model/JwtResponse';
import { LoginRequest } from './../model/LoginRequest';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  login(loginRequest: LoginRequest): Observable<JwtResponse> {
    return this.httpClient.post<JwtResponse>('http://localhost:8080/v1.0/oauth/client_credential/accesstoken', loginRequest);
  }
}