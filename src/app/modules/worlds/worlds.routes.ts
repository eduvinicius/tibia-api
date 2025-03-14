import { Routes } from '@angular/router';

export const worldsRoutes: Routes = [
  { path: '', redirectTo: 'mundos', pathMatch: 'full' },
  {
    path: 'mundos',
    loadComponent: () => import('./pages/worlds/worlds.component').then(m => m.WorldsComponent)
  },
  {
    path: 'detalhes/:id',
    loadComponent: () => import('./pages/world-details/world-details.component').then(m => m.WorldDetailsComponent)
  }
];
