import { Component, EventEmitter, OnDestroy, Output } from '@angular/core';
import { BehaviorSubject, Subject, takeUntil } from 'rxjs';
import { CharactersService } from '../../services/characters.service';
import { ICharacterModel } from '../../interfaces/ICharacters';
import { ICharForm } from '../../interfaces/ICharForm';
import { CharacterFormService } from '../../services/character-form.service';
import { LoaderService } from 'src/app/modules/core/services/loader.service';

@Component({
    selector: 'app-search-character-form',
    templateUrl: './search-character-form.component.html',
    styleUrls: ['./search-character-form.component.scss'],
    standalone: false
})

export class SearchCharacterFormComponent implements OnDestroy {

  private _onDestroy$ = new Subject<void>();

  constructor(
    private _characterService: CharactersService,
    private _loader: LoaderService,
    public charForm: CharacterFormService
    ) {}

  submitForm() {

    if (this.charForm.characterForm.valid) {
      this._loader.setLoading(true);
      this._handleCharacterData();
      return
    }

    this.charForm.charFormValidation$.next(true);
    this.handleTimeout(3000);
  };

  private _handleCharacterData(): void {
    const formData = this.charForm.characterForm.value as ICharForm;
    this._characterService.getCharByName(formData.charName).pipe(takeUntil(this._onDestroy$)).subscribe({
      next: (character: ICharacterModel) => {
        this.charForm.triggerCharacterData(character)
      this._loader.setLoading(false);
      },
      error: (error) => {
        console.log(error)
        this._loader.setLoading(false);
      }
    });
    this.charForm.characterForm.reset();
  }

  public handleTimeout(time: number): void {
    setTimeout(() => {
      this.charForm.charFormValidation$.next(false)
    }, time)
  }

  ngOnDestroy(): void {
    this._onDestroy$.next();
  }
}
