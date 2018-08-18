import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import { DataService } from './ChatApp.service';

@Injectable()
export class Myinterceptor implements HttpInterceptor {

constructor(private dataservice:DataService){}

  intercept (req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authReq = req.clone({
      setHeaders: {
        Authorization: this.dataservice.userToken()
      }
    });
    return next.handle(authReq);
  }
}