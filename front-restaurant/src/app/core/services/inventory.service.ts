import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  constructor() {}
  getProducts(): Observable<Product[]> {
    return of([
      { id: 1, nombre: 'Hamburguesa Clásica', categoria: 'Plato Fuerte', precio: 120, stock: 15 },
      { id: 2, nombre: 'Refresco de Cola', categoria: 'Bebida', precio: 35, stock: 40 }
    ]);
  }
  deleteProduct(id: number): Observable<any> {
    return of({}); 
  }
}