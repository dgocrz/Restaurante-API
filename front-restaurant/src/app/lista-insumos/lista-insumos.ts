import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { InsumosService } from '../core/services/insumos';

@Component({
  selector: 'app-lista-insumos',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './lista-insumos.html',
  styleUrl: './lista-insumos.css',
})
export class ListaInsumos {

  insumos: any[] = [];

  constructor(private insumosService: InsumosService) {
    this.insumos = this.insumosService.getInsumos();
  }

  eliminar(index: number) {
    this.insumosService.eliminarInsumo(index);
  }

}