import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

import { CharactersRoutingModule } from './characters-routing.module';
import { CharactersComponent } from './pages/characters/characters.component';
import { CharactersService } from './services/characters.service';
import { SearchCharacterFormComponent } from './components/search-character-form/search-character-form.component';
import { CharacterTableComponent } from './components/character-table/character-table.component';
import { CharacterDetailsComponent } from './pages/character-details/character-details.component';


@NgModule({
  declarations: [
    CharactersComponent,
    SearchCharacterFormComponent,
    CharacterTableComponent,
    CharacterDetailsComponent,
  ],
  providers: [
    CharactersService,
  ],
  imports: [
    CommonModule,
    CharactersRoutingModule,
    HttpClientModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class CharactersModule { }
