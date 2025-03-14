import { Routes } from '@angular/router';

export const characterRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/characters/characters.component').then(m => m.CharactersComponent)
  },
  {
    path: 'detalhes/:id',
    loadComponent: () => import('./pages/character-details/character-details.component').then(m => m.CharacterDetailsComponent)
  }
];

