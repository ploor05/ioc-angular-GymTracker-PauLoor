import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'cataleg',
    loadComponent: () =>
      import('./pages/cataleg/cataleg.component').then(m => m.CatalegComponent)
  }
];
