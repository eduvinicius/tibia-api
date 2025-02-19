import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

import { CharactersRoutingModule } from './characters-routing.module';
import { CharactersComponent } from './pages/characters/characters.component';
import { CharactersService } from './services/characters.service';
import { SearchCharacterFormComponent } from './components/search-character-form/search-character-form.component';
import { CharacterTableComponent } from './components/character-table/character-table.component';
import { CharacterDetailsComponent } from './pages/character-details/character-details.component';
import { HasCommentPipe } from '../core/pipes/hasComment.pipe';


@NgModule({ declarations: [
        CharactersComponent,
        SearchCharacterFormComponent,
        CharacterTableComponent,
        CharacterDetailsComponent,
        HasCommentPipe
    ], imports: [CommonModule,
        CharactersRoutingModule,
        FormsModule,
        SharedModule,
        ReactiveFormsModule], providers: [
        CharactersService,
        provideHttpClient(withInterceptorsFromDi()),
    ] })
export class CharactersModule { }
