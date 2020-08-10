import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs/operators';
import { JwtHelperService } from "@auth0/angular-jwt";
import { Router } from '@angular/router';
import { environment } from "../environments/environment";
const END_POINT: string = environment.endpoint;
export const TOKEN_KEY: string = "JWT_TOKEN";
@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private _http: HttpClient, private _jwtHelper: JwtHelperService, private _router: Router) { }
  logout() {
    localStorage.removeItem(TOKEN_KEY);
    this._router.navigateByUrl("");
  }
  login(email: string, password: string) {
    return this._http.post(`${END_POINT}/login`, {
      email: email,
      password: password
    }).pipe(map(token => {
      console.log(token);

      localStorage.setItem(TOKEN_KEY, token["token"]);
      return token;
    })).toPromise();
  }
  isUserAuthenticated() {
    const token = localStorage.getItem(TOKEN_KEY);
    return !this._jwtHelper.isTokenExpired(token);
  }

}
