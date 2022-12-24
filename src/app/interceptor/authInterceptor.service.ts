import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable} from 'rxjs';
import { TokenService } from '../service/token.service';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

  constructor( private tokenService: TokenService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let intReq = req;
    const token = this.tokenService.getToken();
    if(token !=null){
      intReq = req.clone({ headers: req.headers.set('Authorization', 'Bearer ' + token)});
    }
    return next.handle(intReq);
  }
}