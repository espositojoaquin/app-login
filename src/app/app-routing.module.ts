import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { BienvenidaComponent } from './Components/bienvenida/bienvenida.component';
import { ErrorComponent } from './Components/error/error.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'error', component: ErrorComponent},
  { path: 'bienvenida', component: BienvenidaComponent},
  { path: '**', redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
