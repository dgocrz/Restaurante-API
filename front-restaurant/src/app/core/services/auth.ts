import { Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthService {
  // Signal para saber si el usuario está logueado
  isAuthenticated = signal<boolean>(false);

  constructor(private router: Router) {
    // Revisar si ya hay un token guardado al recargar la página
    this.isAuthenticated.set(!!localStorage.getItem('jwt_token'));
  }

  login(correo: string, contrasena: string) {
    // Simulador de validación
    if (correo === 'admin@restaurante.com' && contrasena === '123456') {
      const fakeToken = 'eyJhbGciOiJIUzI1NiIsInR...'; // Simulador de JWT
      localStorage.setItem('jwt_token', fakeToken);
      this.isAuthenticated.set(true);
      this.router.navigate(['/inventario']);
      return true;
    }
    return false;
  }

  logout() {
    localStorage.removeItem('jwt_token');
    this.isAuthenticated.set(false);
    this.router.navigate(['/login']);
  }
}