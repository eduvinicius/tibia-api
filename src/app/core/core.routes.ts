import { Routes } from '@angular/router';

export const coreRoutes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  {
    path: 'inicio',
    loadComponent: () => import('../modules/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'criaturas',
    loadChildren: () => import('../modules/creatures/creatures.routes').then(m => m.creaturesRoutes)
  },
  {
    path: 'personagens',
    loadChildren: () => import('../modules/characters/character.routes').then(m => m.characterRoutes)
  },
  {
    path: 'guildas',
    loadChildren: () => import('../modules/guilds/guilds.routes').then(m => m.guildsRoutes)
  },
  {
    path: 'mundos',
    loadChildren: () => import('../modules/worlds/worlds.routes').then(m => m.worldsRoutes)
  },
  {
    path: 'sobre',
    loadComponent: () => import('../modules/about/about.component').then(m => m.AboutComponent)
  },
  {path: "**", redirectTo: 'inicio'}
];
