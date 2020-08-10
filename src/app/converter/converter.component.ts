import { Component, OnInit } from '@angular/core';
import { ConvertService } from "../convert.service";
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent implements OnInit {
  inputjson: string;
  outputjson: string;

  constructor(private _converterService: ConvertService, private _snackBar: MatSnackBar, private _authService: AuthService) { }

  ngOnInit(): void {
  }
  logout() {
    this._authService.logout();
  }
  async convert(event): Promise<void> {
    try {

      const input = JSON.parse(this.inputjson);
      console.log(input);
      const result = await this._converterService.connvert(input);
      this.outputjson = JSON.stringify(result);
    } catch (error) {
      this._snackBar.open("Invalid Input", "Close", { duration: 2000 });
      this.inputjson = "";
    }
  }
}
