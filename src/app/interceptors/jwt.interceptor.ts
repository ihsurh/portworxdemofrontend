import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TOKEN_KEY } from '../auth.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = localStorage.getItem(TOKEN_KEY);
    if (token) {
      const request2 = request.clone({
        headers: request.headers.set("Authorization", `Bearer ${token}`)
      });
      console.log(request2);

      return next.handle(request2);
    }
    return next.handle(request);
  }
}
