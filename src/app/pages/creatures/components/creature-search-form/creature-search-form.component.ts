import { Component, effect, signal } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { CreaturesService } from 'src/app/shared/services/api/creatures.service';

import { ICreatureModel } from '../../interfaces/ICreature';
import { ICreatureForm } from '../../interfaces/ICreatureForm';

import { CreatureFormService } from '../../services/creature-form.service';
import { LoaderService } from 'src/app/shared/services/loader.service';

@Component({
    selector: 'app-creature-search-form',
    templateUrl: './creature-search-form.component.html',
    styleUrls: ['./creature-search-form.component.css'],
    standalone: true,
    imports: [ReactiveFormsModule]
})

export class CreatureSearchFormComponent {

  public creatureFormValidation = signal<boolean>(false);
  timeoutDuration = signal<number | null>(null);

  constructor(
    private readonly _creaturesService: CreaturesService,
    private readonly _loaderService: LoaderService,
    public creatureFormService: CreatureFormService,
    ) {
      effect(() => {
        const duration = this.timeoutDuration();
        if (duration === null) return;
        const timeoutId = setTimeout(() => {
          this.creatureFormValidation.set(false);
          this.timeoutDuration.set(null);
        }, duration);
        return () => clearTimeout(timeoutId);
      });
    }

  submitForm(): void {
    if (this.creatureFormService.creatureForm.valid) {
      this._loaderService.setLoading(true);
      const formData = this.creatureFormService.creatureForm.value as ICreatureForm;
      this._creaturesService.getCreatureByRace(formData.creatureName)
      .subscribe({
        next: (response: ICreatureModel) => {
          this.creatureFormService.notifyOnCreatureChanged(response);
          this._loaderService.setLoading(false);
        },
        error: (error) => {
          console.log(error)
          this.creatureFormService.notifyOnCreatureChanged(error)
          this._loaderService.setLoading(false);
        }
      });
      this.creatureFormService.creatureForm.reset();
      return;
    }

    this.creatureFormValidation.set(true);
    this.handleTimeout(3000);
  };

  handleTimeout(time: number): void {
    this.timeoutDuration.set(time);
  }
}
