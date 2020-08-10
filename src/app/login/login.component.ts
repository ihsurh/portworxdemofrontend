import { Component, OnInit, } from '@angular/core';
import { AuthService } from "../auth.service";
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName: string;
  password: string;
  constructor(private _authService: AuthService, private _router: Router, private _snackBar: MatSnackBar) { }
  async doLogin(event: any): Promise<void> {
    try {
      const success = await this._authService.login(this.userName, this.password);
      this._router.navigateByUrl("converter")

    } catch (error) {
      console.error(error);
      this._snackBar.open("Invalid Credentials", "Close", { duration: 2000 });
      this.password = "";
      this.userName = "";

    }


  }
  ngOnInit(): void {
  }

}
