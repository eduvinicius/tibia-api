import { Component, EventEmitter, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CharactersService } from '../../services/characters.service';
import { ICharacterModel } from '../../interfaces/ICharacters';
import { ICharForm } from '../../interfaces/ICharForm';
import { CharacterFormService } from '../../services/character-form.service';

@Component({
  selector: 'app-search-character-form',
  templateUrl: './search-character-form.component.html',
  styleUrls: ['./search-character-form.component.scss']
})

export class SearchCharacterFormComponent {

  @Output() character = new EventEmitter<ICharacterModel>();
  @Output() isLoading = new EventEmitter<boolean>();
  public charFormValidation = new BehaviorSubject<boolean>(false);

  constructor(
    private characterService: CharactersService,
    public charForm: CharacterFormService
    ) {}

  submitForm() {
    if (this.charForm.characterForm.valid) {
      this.isLoading.emit(true)
      const formData = this.charForm.characterForm.value as ICharForm;
      this.characterService.getCharByName(formData.charName).subscribe({
        next: (data: ICharacterModel) => {
          this.handleCharacterData(data)
        },
        error: (error) => {
          console.log(error)
          this.isLoading.emit(false)
        }
      });
      this.charForm.characterForm.reset();
    } else {
      this.charFormValidation.next(true);
      this.handleTimeout(3000);
    }
  };

  handleCharacterData(data: ICharacterModel): void {
    this.character.emit(data);
    this.isLoading.emit(false);
  }

  handleTimeout(time: number): void {
    setTimeout(() => {
      this.charFormValidation.next(false)
    }, time)
  }
}
