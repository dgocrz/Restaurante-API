import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoryService } from '../../../../core/services/inventory.service';
import { Product } from '../../../../core/models/product.model';

@Component({
  selector: 'app-inventory-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './inventory-list.component.html'
})
export class InventoryListComponent implements OnInit {
  // Usamos un Signal para manejar la lista de productos de forma reactiva
  productos = signal<Product[]>([]);

  constructor(private inventoryService: InventoryService) {}

  ngOnInit(): void {
    this.cargarProductos();
  }

  cargarProductos() {
    // Aquí llamamos al servicio que se conecta con la API de Java
    this.inventoryService.getProducts().subscribe({
      next: (data) => this.productos.set(data),
      error: (err) => console.error('Error al cargar productos', err)
    });
  }

  eliminar(id: number | undefined) {
    if (id && confirm('¿Estás seguro de eliminar este producto?')) {
      this.inventoryService.deleteProduct(id).subscribe(() => {
        // Filtramos la lista para quitar el eliminado sin recargar la página
        this.productos.update(prev => prev.filter(p => p.id !== id));
      });
    }
  }
}