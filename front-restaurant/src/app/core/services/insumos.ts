import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InsumosService {

  private insumos = [
    { nombre: 'Tomate', cantidad: 20, unidad: 'kg' },
    { nombre: 'Queso', cantidad: 10, unidad: 'kg' },
    { nombre: 'Lechuga', cantidad: 15, unidad: 'pzas' }
  ];

  getInsumos() {
    return this.insumos;
  }

  eliminarInsumo(index: number) {
    this.insumos.splice(index, 1);
  }
}