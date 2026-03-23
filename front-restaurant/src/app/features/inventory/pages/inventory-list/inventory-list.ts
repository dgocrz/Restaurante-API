import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { InventoryService } from '../../../../core/services/inventory.service';
import { Product } from '../../../../core/models/product.model';

@Component({
  selector: 'app-inventory-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './inventory-list.html'
})
export class InventoryListComponent implements OnInit {

  productos = signal<Product[]>([]);

  constructor(private inventoryService: InventoryService) {}

  ngOnInit(): void {
    this.cargarProductos();
  }

  cargarProductos() {
    this.inventoryService.getProducts().subscribe({
      next: (data: any) => this.productos.set(data),
      error: (err: any) => console.error('Error al cargar productos', err)
    });
  }
}