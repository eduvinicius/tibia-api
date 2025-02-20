import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorldsComponent } from './pages/worlds/worlds.component';
import { WorldDetailsComponent } from './pages/world-details/world-details.component';

const routes: Routes = [
  { path: '', children: [
    { path: '', redirectTo: 'mundos', pathMatch: 'full' },
    { path: '', component: WorldsComponent},
    { path: 'detalhes/:id', component: WorldDetailsComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorldsRoutingModule { }
