import {  ChangeDetectionStrategy, Component, input, ViewEncapsulation } from '@angular/core';
import { RouterModule } from '@angular/router';
import {ScrollingModule} from '@angular/cdk/scrolling';

import { ICreaturesListModel } from '../../interfaces/ICreaturesList';

@Component({
    selector: 'app-creatures-list',
    templateUrl: './creatures-list.component.html',
    styleUrls: ['./creatures-list.component.css'],
    standalone: true,
    imports: [RouterModule, ScrollingModule],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
})
export class CreaturesListComponent {
  creatures = input<ICreaturesListModel[] | null>([]);
}
