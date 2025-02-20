import { Routes } from '@angular/router';

export const coreRoutes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  {
    path: 'inicio',
    loadComponent: () => import('../pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'sobre',
    loadComponent: () => import('../pages/about/about.component').then(m => m.AboutComponent)
  },
  {
    path: 'personagens',
    loadChildren: () => import('../pages/characters/character.routes').then(m => m.characterRoutes)
  },
  {
    path: 'criaturas',
    loadChildren: () => import('../pages/creatures/creatures.routes').then(m => m.creaturesRoutes)
  }
];
