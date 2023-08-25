import { Component } from '@angular/core';
import { ICharacterWebDTO } from '../../interfaces/ICharacters';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})

export class CharactersComponent  {

  constructor() {}

  public character: ICharacterWebDTO | undefined;
  public isLoading: boolean | undefined;

  characterData(data: ICharacterWebDTO): void {
    this.character = data
  };

  isLoadingEvent(loader: boolean): void {
    this.isLoading = loader
  };
}
