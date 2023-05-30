import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreaturesComponent } from './pages/creatures/creatures.component';
import { CreatureSearchComponent } from './pages/creature-search/creature-search.component';
import { CreatureDetailsComponent } from './pages/creature-details/creature-details.component';
import { BossesListComponent } from './pages/bosses-list/bosses-list.component';

const routes: Routes = [
  { path: '', children: [
    { path: '', redirectTo: 'criaturas', pathMatch: 'full' },
    { path: '', component: CreaturesComponent },
    { path: 'pesquisa', component: CreatureSearchComponent },
    { path:'detalhes/:id', component: CreatureDetailsComponent },
    { path: 'bosses', component: BossesListComponent },
    { path: '**', redirectTo: 'criaturas' },
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreaturesRoutingModule { }
