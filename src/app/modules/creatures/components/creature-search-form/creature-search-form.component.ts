import { Component, EventEmitter, Output } from '@angular/core';
import { ICreatureModel } from '../../interfaces/ICreature';
import { CreaturesService } from '../../services/creatures.service';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { ICreatureForm } from '../../interfaces/ICreatureForm';
import { BehaviorSubject } from 'rxjs';
import { CreatureFormService } from '../../services/creature-form.service';
import { LoaderService } from 'src/app/modules/core/services/loader.service';

@Component({
  selector: 'app-creature-search-form',
  templateUrl: './creature-search-form.component.html',
  styleUrls: ['./creature-search-form.component.scss']
})

export class CreatureSearchFormComponent {

  @Output() creature = new EventEmitter<ICreatureModel>();
  @Output() isLoading = new EventEmitter<boolean>();
  public creatureFormValidation = new BehaviorSubject<boolean>(false);

  constructor(
    private _creaturesService: CreaturesService,
    private _loaderService: LoaderService,
    public creatureFormService: CreatureFormService,
    ) {}

  formatString(string: string): string {
    return string.replace(/\s/g, '').toLowerCase()
  };

  submitForm(): void {
    if (this.creatureFormService.creatureForm.valid) {
      this._loaderService.setLoading(true);
      const formData = this.creatureFormService.creatureForm.value as ICreatureForm;
      this._creaturesService.getCreatureByRace(this.formatString(formData.creatureName))
      .subscribe({
        next: (response: ICreatureModel) => {
          this.creatureFormService.notifyOnCreatureChanged(response);
          this._loaderService.setLoading(false);
        },
        error: (error) => {
          console.log(error)
          this.isLoading.emit(false)
        }
      });
      this.creatureFormService.creatureForm.reset();
    } else {
      this.creatureFormValidation.next(true);
      this.handleTimeout(3000);
    }
  };

  handleCreatureData(): void {
    this.isLoading.emit(false);
  }

  handleTimeout(time: number): void {
    setTimeout(() => {
      this.creatureFormValidation.next(false)
    }, time)
  }
}
