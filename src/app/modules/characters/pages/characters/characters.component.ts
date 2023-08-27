import { Component } from '@angular/core';
import { ICharacterModel } from '../../interfaces/ICharacters';
import { BehaviorSubject, Observable, Subject, map } from 'rxjs';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})

export class CharactersComponent  {

  constructor() {}

  private _character = new Subject<ICharacterModel>();
  private _isLoading = new BehaviorSubject<boolean>(false);

  characterData(data: ICharacterModel) {
    this._character.next(data)
  };

  get character(): Observable<ICharacterModel>{
    return this._character.pipe(
      map((char) => char as ICharacterModel)
    )
  }

  isLoadingEvent(loader: boolean): void {
    this._isLoading.next(loader)
  };

  get isLoading(): Observable<boolean> {
    return this._isLoading.pipe(
      map((value) => value)
    )
  }
}
