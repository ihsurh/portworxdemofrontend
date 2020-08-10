import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { ConverterComponent } from './converter/converter.component';
import { AuthGuard } from "./guards/auth.guard";
const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'converter', component: ConverterComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
