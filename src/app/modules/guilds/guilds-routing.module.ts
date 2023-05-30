import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuildsComponent } from './pages/guilds/guilds.component';

const routes: Routes = [
  { path: '', children: [
    { path: '', redirectTo: 'guildas', pathMatch: 'full' },
    { path: '', component: GuildsComponent},
  ]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuildsRoutingModule { }
