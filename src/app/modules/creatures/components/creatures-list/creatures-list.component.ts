import { Component, Input, TrackByFunction } from '@angular/core';
import { ICreaturesListModel } from '../../interfaces/ICreaturesList';

@Component({
    selector: 'app-creatures-list',
    templateUrl: './creatures-list.component.html',
    styleUrls: ['./creatures-list.component.css'],
    standalone: false
})
export class CreaturesListComponent {
  @Input() visibleCreatures: ICreaturesListModel[] | null = [];

  public trackCreatureList(index: number): number {
    return index;
  }
}
