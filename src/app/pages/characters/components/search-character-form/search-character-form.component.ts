import { Component, OnDestroy } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { CharactersService } from 'src/app/shared/services/api/characters.service';
import { ICharacterModel } from '../../interfaces/ICharacters';
import { ICharForm } from '../../interfaces/ICharForm';
import { CharacterFormService } from '../../services/character-form.service';
import { LoaderService } from 'src/app/shared/services/loader.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AsyncPipe } from '@angular/common';

@Component({
    selector: 'app-search-character-form',
    templateUrl: './search-character-form.component.html',
    styleUrls: ['./search-character-form.component.css'],
    standalone: true,
    imports: [FormsModule, ReactiveFormsModule, AsyncPipe]
})

export class SearchCharacterFormComponent implements OnDestroy {

  private readonly _onDestroy$ = new Subject<void>();

  constructor(
    private readonly _characterService: CharactersService,
    private readonly _loader: LoaderService,
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
