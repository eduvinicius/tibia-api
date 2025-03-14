import { Component, input} from '@angular/core';
import { RouterLink } from '@angular/router';

import { IWorldDetails } from '../../interfaces/IWorldDetails';
@Component({
    selector: 'app-online-players-table',
    templateUrl: './online-players-table.component.html',
    styleUrls: ['./online-players-table.component.css'],
    standalone: true,
    imports: [RouterLink]
})
export class OnlinePlayersTableComponent {

  worldDetails = input<IWorldDetails | null>(null);
}
