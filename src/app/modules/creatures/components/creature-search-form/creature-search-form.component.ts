import { Component, EventEmitter, Output } from '@angular/core';
import { ICreatureModel } from '../../interfaces/ICreature';
import { CreaturesService } from '../../services/creatures.service';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { ICreatureForm } from '../../interfaces/ICreatureForm';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-creature-search-form',
  templateUrl: './creature-search-form.component.html',
  styleUrls: ['./creature-search-form.component.scss']
})

export class CreatureSearchFormComponent {

  @Output() creature = new EventEmitter<ICreatureModel>();
  @Output() isLoading = new EventEmitter<boolean>();
  public creatureForm: FormGroup;
  public creatureFormValidation = new BehaviorSubject<boolean>(false);

  constructor(private creaturesService: CreaturesService) {
    this.creatureForm = new FormGroup({
      creatureName: new FormControl('', [Validators.required])
    })
  }

  get creatureName(): AbstractControl<string> {
    return this.creatureForm.get('creatureName')!
  }

  formatString(string: string): string {
    return string.replace(/\s/g, '').toLowerCase()
  };

  submitForm(): void {
    if (this.creatureForm.valid) {
      this.isLoading.emit(true)
      const formData = this.creatureForm.value as ICreatureForm;
      this.creaturesService.getCreatureByRace(this.formatString(formData.creatureName))
      .subscribe({
        next: (response: ICreatureModel) => {
          this.handleCreatureData(response);
        },
        error: (error) => {
          console.log(error)
          this.isLoading.emit(false)
        }
      });
      this.creatureForm.reset();
    } else {
      this.creatureFormValidation.next(true);
      this.handleTimeout(3000);
    }
  };

  handleCreatureData(data: ICreatureModel): void {
    this.creature.emit(data);
    this.isLoading.emit(false);
  }

  handleTimeout(time: number): void {
    setTimeout(() => {
      this.creatureFormValidation.next(false)
    }, time)
  }
}
