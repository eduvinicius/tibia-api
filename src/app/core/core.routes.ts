import { Routes } from '@angular/router';

export const coreRoutes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  {
    path: 'inicio',
    loadComponent: () => import('../pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'criaturas',
    loadChildren: () => import('../pages/creatures/creatures.routes').then(m => m.creaturesRoutes)
  },
  {
    path: 'personagens',
    loadChildren: () => import('../pages/characters/character.routes').then(m => m.characterRoutes)
  },
  {
    path: 'guildas',
    loadChildren: () => import('../pages/guilds/guilds.routes').then(m => m.guildsRoutes)
  },
  {
    path: 'mundos',
    loadChildren: () => import('../pages/worlds/worlds.routes').then(m => m.worldsRoutes)
  },
  {
    path: 'sobre',
    loadComponent: () => import('../pages/about/about.component').then(m => m.AboutComponent)
  },
];
