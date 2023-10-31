import { Injectable } from '@angular/core';
import { ICharacterModel } from '../interfaces/ICharacters';
import { Subject } from 'rxjs';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CharacterFormService {

  private _characterData$ = new Subject<ICharacterModel>()
  public characterData$ = this._characterData$.asObservable();
  public characterForm = this.createCharForm();

  public triggerCharacterData(character: ICharacterModel): void {
    this._characterData$.next(character);
  }

  public createCharForm(): FormGroup {
    return new FormGroup({
      charName: new FormControl('', [Validators.required])
    })
  }

  get charName(): AbstractControl<string> {
    return this.characterForm.get('charName')!
  }
constructor() { }

}
