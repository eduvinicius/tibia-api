import { Component, Input } from '@angular/core';
import { IWorldDetails } from '../../interfaces/IWorldDetails';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-online-players-table',
    templateUrl: './online-players-table.component.html',
    styleUrls: ['./online-players-table.component.css'],
    standalone: true,
    imports: [RouterLink]
})
export class OnlinePlayersTableComponent {

  @Input() worldDetails: IWorldDetails | undefined;
}
