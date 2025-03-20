import { Component, DestroyRef, inject} from '@angular/core';
import { FormGroupDirective, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { CharacterFormService } from '../../services/character-form.service';
import { CharactersService } from 'src/app/core/services/api/characters.service';
import { LoaderService } from 'src/app/core/services/loader.service';

import { ICharacterModel } from '../../interfaces/ICharacters';
import { ICharForm } from '../../interfaces/ICharForm';

@Component({
    selector: 'app-search-character-form',
    templateUrl: './search-character-form.component.html',
    styleUrls: ['./search-character-form.component.css'],
    standalone: true,
    imports: [FormsModule, ReactiveFormsModule]
})

export class SearchCharacterFormComponent {

  private readonly _destroyRef = inject(DestroyRef);

  constructor(
    private readonly _characterService: CharactersService,
    private readonly _loader: LoaderService,
    public charForm: CharacterFormService
    ) {}

  submitForm(formDirective: FormGroupDirective): void {
    if (this.charForm.characterForm.valid) {
      this._loader.setLoading(true);
      this._handleCharacterData();
      formDirective.resetForm();
    }
  };

  private _handleCharacterData(): void {
    const formData = this.charForm.characterForm.value as ICharForm;
    this._characterService.getCharByName(formData.charName)
      .pipe(takeUntilDestroyed(this._destroyRef))
      .subscribe({
      next: (character: ICharacterModel) => {
        this.charForm.triggerCharacterData(character)
        this._loader.setLoading(false);

      },
      error: (error) => {
        console.log(error)
        this.charForm.triggerCharacterData(null);
        this._loader.setLoading(false);
      }
    });
    this.charForm.characterForm.reset();
  }
}
