import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InsumosService } from '../core/services/insumos';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-insumo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './agregar-insumo.html'
})
export class AgregarInsumo {

  nombre = '';
  cantidad = 0;
  unidad = '';

  constructor(
  private insumosService: InsumosService,
  private router: Router
) {}

  agregar() {
  this.insumosService.getInsumos().push({
    nombre: this.nombre,
    cantidad: this.cantidad,
    unidad: this.unidad
  });

  // limpiar campos
  this.nombre = '';
  this.cantidad = 0;
  this.unidad = '';

  // redirigir a lista
  this.router.navigate(['/insumos']);
}
}