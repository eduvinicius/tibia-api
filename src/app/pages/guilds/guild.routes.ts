import { Routes } from '@angular/router';

export const guildRoutes: Routes = [
  { path: '', redirectTo: 'guildas', pathMatch: 'full' },
  {
    path: 'guildas',
    loadComponent: () => import('./pages/guilds/guilds.component').then(m => m.GuildsComponent)
  },
];

