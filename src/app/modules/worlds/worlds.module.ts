import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorldsRoutingModule } from './worlds-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { WorldsComponent } from './pages/worlds/worlds.component';
import { WorldsService } from './services/worlds.service';
import { WorldsTableComponent } from './components/worlds-table/worlds-table.component';
import { SharedModule } from '../shared/shared.module';
import { WorldDetailsComponent } from './pages/world-details/world-details.component';
import { OnlinePlayersTableComponent } from './components/online-players-table/online-players-table.component';


@NgModule({
  declarations: [
    WorldsComponent,
    WorldsTableComponent,
    WorldDetailsComponent,
    OnlinePlayersTableComponent,
  ],
  providers: [
    WorldsService
  ],
  imports: [
    CommonModule,
    WorldsRoutingModule,
    HttpClientModule,
    SharedModule
  ]
})
export class WorldsModule { }
