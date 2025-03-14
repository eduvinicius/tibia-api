import { Routes } from '@angular/router';

export const guildsRoutes: Routes = [
  { path: '', redirectTo: 'guildas', pathMatch: 'full' },
  {
    path: 'guildas',
    loadComponent: () => import('./pages/guilds/guilds.component').then(m => m.GuildsComponent)
  },
];

