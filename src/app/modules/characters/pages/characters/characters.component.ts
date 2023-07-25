import { Component } from '@angular/core';
import { ICharacter } from '../../interfaces/ICharacters';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})

export class CharactersComponent  {

  constructor() {}

  character: ICharacter | undefined;
  isLoading: boolean | undefined;

  characterData(data: ICharacter): void {
    this.character = data
  };

  isLoadingEvent(loader: boolean): void {
    this.isLoading = loader
  };
}
