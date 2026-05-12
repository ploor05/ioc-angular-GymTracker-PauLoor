import { Routes } from '@angular/router';

import { CatalegComponent } from './pages/cataleg/cataleg.component';
import { CercaComponent } from './pages/cerca/cerca.component';
import { LoginComponent } from './pages/login/login.component';
import { DetallComponent } from './pages/detall/detall.component';

import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'cataleg', pathMatch: 'full' },

  { path: 'cataleg', component: CatalegComponent },

  { path: 'cerca', component: CercaComponent },

  {
    path: 'preferits',
    loadComponent: () =>
      import('./pages/preferits/preferits.component')
        .then(m => m.PreferitsComponent),
    canActivate: [authGuard]
  },

  { path: 'login', component: LoginComponent },

  { path: 'detall/:id', component: DetallComponent },

  { path: '**', redirectTo: 'cataleg' }
];
