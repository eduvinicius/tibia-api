import { Component } from '@angular/core';
import { SearchCharacterFormComponent } from '../../components/search-character-form/search-character-form.component';
import { CharacterTableComponent } from '../../components/character-table/character-table.component';

@Component({
    selector: 'app-characters',
    templateUrl: './characters.component.html',
    standalone: true,
    imports: [SearchCharacterFormComponent, CharacterTableComponent],
})

export class CharactersComponent  {}
