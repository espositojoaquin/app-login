import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { BienvenidaComponent } from './Components/bienvenida/bienvenida.component';
import { ErrorComponent } from './Components/error/error.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BienvenidaComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
