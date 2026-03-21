import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'insumos',
    pathMatch: 'full'
  },
  {
    path: 'insumos',
    loadComponent: () =>
      import('./lista-insumos/lista-insumos')
        .then(m => m.ListaInsumos)
  },
  {
    path: 'agregar',
    loadComponent: () =>
      import('./agregar-insumo/agregar-insumo')
        .then(m => m.AgregarInsumo)
  }
];

