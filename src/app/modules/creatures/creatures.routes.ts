import { Routes } from '@angular/router';

export const creaturesRoutes: Routes = [
  {path: '', redirectTo: 'criaturas', pathMatch: 'full',},
  {
    path: '',
    loadComponent: () => import('./pages/creatures/creatures.component').then(m => m.CreaturesComponent)
  },
  {
    path: 'pesquisa',
    loadComponent: () => import('./pages/creature-search/creature-search.component').then(m => m.CreatureSearchComponent)
  },
  {
    path: 'detalhes/:id',
    loadComponent: () => import('./pages/creature-details/creature-details.component').then(m => m.CreatureDetailsComponent)
  },
  {
    path: 'bosses',
    loadComponent: () => import('./pages/bosses-list/bosses-list.component').then(m => m.BossesListComponent)
  },
  { path: '**', redirectTo: 'criaturas' },
];

