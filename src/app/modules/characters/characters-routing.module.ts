import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './pages/characters/characters.component';
import { CharacterDetailsComponent } from './pages/character-details/character-details.component';

const routes: Routes = [
  {path: '', children: [
    { path: '', component: CharactersComponent },
    { path: 'detalhes/:id', component: CharacterDetailsComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharactersRoutingModule { }
