import { Component, input, signal } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ICreaturesListModel } from '../../interfaces/ICreaturesList';
import { VirtualScrollDirective } from 'src/app/shared/directives/virtualscroll.directive';
@Component({
    selector: 'app-creatures-list',
    templateUrl: './creatures-list.component.html',
    styleUrls: ['./creatures-list.component.css'],
    standalone: true,
    imports: [RouterModule, VirtualScrollDirective]
})
export class CreaturesListComponent {
  creatures = input<ICreaturesListModel[] | null>([]);
  visibleCreatures = signal<ICreaturesListModel[]>([]);

  updateVisibleCreatures(items: ICreaturesListModel[]) {
    this.visibleCreatures.set(items);
  }
}
