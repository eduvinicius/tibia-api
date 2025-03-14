import { Component, input } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ICreaturesListModel } from '../../interfaces/ICreaturesList';
@Component({
    selector: 'app-creatures-list',
    templateUrl: './creatures-list.component.html',
    styleUrls: ['./creatures-list.component.css'],
    standalone: true,
    imports: [RouterModule]
})
export class CreaturesListComponent {
  visibleCreatures = input<ICreaturesListModel[] | null>([]);
}
