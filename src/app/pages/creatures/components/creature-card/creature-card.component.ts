import { Component, computed } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';

import { Observable, map } from 'rxjs';

import { ICreatureModel } from '../../interfaces/ICreature';

import { CreatureFormService } from '../../services/creature-form.service';
import { LoaderService } from 'src/app/shared/services/loader.service';

import { LoaderComponent } from 'src/app/shared/components/loader/loader.component';

import { FormatListPipe } from 'src/app/shared/pipes/formatList.pipe';
@Component({
    selector: 'app-creature-card',
    templateUrl: './creature-card.component.html',
    styleUrls: ['./creature-card.component.css'],
    standalone: true,
    imports: [LoaderComponent, FormatListPipe]
})

export class CreatureCardComponent {

  public creature = toSignal(this.getCreatureData(), { initialValue: null});

  constructor(
    private readonly _creatureFormService: CreatureFormService,
    public loadingService: LoaderService
  ) {}

  hasCreature = computed(() => {
    return this.creature() && this.creature()?.name !== 'Error';
  });

  public getCreatureData(): Observable<ICreatureModel> {
    return this._creatureFormService.creatureData$.pipe(
      map((creature) => {
        return creature;
        })
      );
  }
}
