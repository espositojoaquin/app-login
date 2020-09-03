import { Component, OnInit } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 // constructor() { }
  usuario = {
    nombre: '',
    email: '',
    clave: ''
  }

  constructor(private router:Router) { };
  ngOnInit(): void {
  }

  login(form: NgForm) {0
   /* if (form.invalid)
    Object.values(form.controls).forEach(control => control.markAsTouched());

    console.log(form);*/
 }

 log(){
        console.log(this.usuario.email);
        console.log(this.usuario.clave);
      if(this.usuario.email=="joa@gmail.com"&& this.usuario.clave =="independiente"){
        this.router.navigate(['bienvenida']);
      }else{
        this.router.navigate(['error']);
      }
    }
 }

