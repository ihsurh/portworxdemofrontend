import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private _router: Router, private _authService: AuthService) { }
  canActivate(
  ): boolean {
    if (!this._authService.isUserAuthenticated()) {
      this._router.navigateByUrl("");
      return false;
    }
    return true;
  }

}
