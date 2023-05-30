import { Component, EventEmitter, Output } from '@angular/core';
import { CharactersService } from '../../services/characters.service';
import { ICharacter, ICharacterData } from '../../interfaces/ICharacters';

@Component({
  selector: 'app-search-character-form',
  templateUrl: './search-character-form.component.html',
  styleUrls: ['./search-character-form.component.scss']
})

export class SearchCharacterFormComponent {

  constructor(private characterService: CharactersService) {}

  @Output() character = new EventEmitter<ICharacter>();
  @Output() isLoading = new EventEmitter<boolean>();
  searchChar: string = '';

  submitForm() {
    this.isLoading.emit(true)
    this.characterService.getCharByName(this.searchChar).subscribe({
      next: (data: ICharacterData) => {
        this.character.emit(data.characters)
        this.isLoading.emit(false)
      },
      error: (error) => {
        console.log(error)
        this.isLoading.emit(false)
      }
    });
    this.searchChar = '';
  };
}
