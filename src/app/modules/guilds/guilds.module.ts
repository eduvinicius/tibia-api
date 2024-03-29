import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { GuildsRoutingModule } from './guilds-routing.module';
import { GuildsComponent } from './pages/guilds/guilds.component';
import { GuildService } from './services/guild.service';
import { GuildSearchFormComponent } from './components/guild-search-form/guild-search-form.component';
import { GuildCardComponent } from './components/guild-card/guild-card.component';
import { GuildMemberCardComponent } from './components/guild-member-card/guild-member-card.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    GuildsComponent,
    GuildSearchFormComponent,
    GuildCardComponent,
    GuildMemberCardComponent,
  ],
  providers: [
    GuildService
  ],
  imports: [
    CommonModule,
    GuildsRoutingModule,
    HttpClientModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class GuildsModule { }
