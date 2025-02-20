import { Component } from '@angular/core';
import { ICreatureModel } from '../../interfaces/ICreature';
import { Subject } from 'rxjs';

@Component({
    selector: 'app-creature-search',
    templateUrl: './creature-search.component.html',
    styleUrls: ['./creature-search.component.css'],
    standalone: false
})

export class CreatureSearchComponent  {

  constructor() {}

  public creature = new Subject<ICreatureModel>;
  public isLoading = new Subject<boolean>;

  isLoadingEvent(loader: boolean): void {
    this.isLoading.next(loader);
  };

  creatureData(data: ICreatureModel): void {
    this.creature.next(data)
  };
}
