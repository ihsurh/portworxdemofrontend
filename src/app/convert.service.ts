import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from "../environments/environment";
const END_POINT: string = environment.endpoint;
@Injectable({
  providedIn: 'root'
})
export class ConvertService {

  constructor(private _http: HttpClient) { }
  connvert(input: string) {
    return this._http.post(`${END_POINT}/convert`, {
      input: input
    }).pipe(map(token => {
      console.log(token);


      return token;
    })).toPromise();
  }
}
