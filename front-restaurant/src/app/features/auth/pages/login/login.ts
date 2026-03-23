import { Component } from '@angular/core';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [], 
  templateUrl: './login.html'
})
export class Login {
  
  constructor(private router: Router) {}

  entrar() {
    console.log("¡Revisando contraseña y dando acceso!");
    this.router.navigate(['/inventario']);
  }
}