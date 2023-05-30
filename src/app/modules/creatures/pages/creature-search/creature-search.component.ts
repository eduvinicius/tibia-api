import { Component } from '@angular/core';
import { ICreaturesList } from '../../interfaces/ICreaturesList';
import { ICreature } from '../../interfaces/ICreature';

@Component({
  selector: 'app-creature-search',
  templateUrl: './creature-search.component.html',
  styleUrls: ['./creature-search.component.scss']
})

export class CreatureSearchComponent  {

  constructor() {}

  creaturesList: ICreaturesList[] = [];
  creature: ICreature | undefined;
  isLoading: boolean | undefined;

  isLoadingEvent(loader: boolean) {
    this.isLoading = loader;
  };

  creatureData(data: ICreature): void {
    this.creature = data;
  };
}
