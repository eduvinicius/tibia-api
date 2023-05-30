import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreModule } from './modules/core/core.module';
import { CreaturesModule } from './modules/creatures/creatures.module';
import { CharactersModule } from './modules/characters/characters.module';
import { GuildsModule } from './modules/guilds/guilds.module';
import { WorldsModule } from './modules/worlds/worlds.module';

const routes: Routes = [
  { path: '', loadChildren: () => CoreModule },
  { path: 'criaturas', loadChildren: () => CreaturesModule },
  { path: 'personagens', loadChildren: () => CharactersModule },
  { path: 'guildas', loadChildren: () => GuildsModule },
  { path: 'mundos', loadChildren: () => WorldsModule }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
