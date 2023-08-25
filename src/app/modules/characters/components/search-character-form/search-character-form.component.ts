import { Component, EventEmitter, Output } from '@angular/core';
import { CharactersService } from '../../services/characters.service';
import { ICharacterRequestDTO, ICharacterWebDTO } from '../../interfaces/ICharacters';
import { CharacterMapper } from '../../mappers/characterMapper';

@Component({
  selector: 'app-search-character-form',
  templateUrl: './search-character-form.component.html',
  styleUrls: ['./search-character-form.component.scss']
})

export class SearchCharacterFormComponent {

  constructor(private characterService: CharactersService) {}

  @Output() character = new EventEmitter<ICharacterWebDTO>();
  @Output() isLoading = new EventEmitter<boolean>();
  private _characterMapper = new CharacterMapper();
  searchChar: string = '';

  submitForm() {
    this.isLoading.emit(true)
    this.characterService.getCharByName(this.searchChar).subscribe({
      next: (data: ICharacterRequestDTO) => {
        this.handleCharacterData(data)
        this.isLoading.emit(false)
      },
      error: (error) => {
        console.log(error)
        this.isLoading.emit(false)
      }
    });
    this.searchChar = '';
  };

  handleCharacterData(data: ICharacterRequestDTO): void {
    const newData = this._characterMapper.mapTo(data);
    this.character.emit(newData);
  }
}
