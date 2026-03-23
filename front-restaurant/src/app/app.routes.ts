import { Routes } from '@angular/router';

import { Login } from './features/auth/pages/login/login';
import { InventoryListComponent } from './features/inventory/pages/inventory-list/inventory-list';
import { ProductForm } from './features/inventory/pages/product-form/product-form';

export const routes: Routes = [
  { path: 'login', component: Login },
  { path: 'inventario', component: InventoryListComponent },
  { path: 'inventario/nuevo', component: ProductForm },
  { path: 'inventario/editar/:id', component: ProductForm },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login' }
];