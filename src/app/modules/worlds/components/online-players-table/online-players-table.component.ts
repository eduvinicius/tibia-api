import { Component, Input } from '@angular/core';
import { IWorldDetails } from '../../interfaces/IWorldDetails';

@Component({
  selector: 'app-online-players-table',
  templateUrl: './online-players-table.component.html',
  styleUrls: ['./online-players-table.component.scss']
})
export class OnlinePlayersTableComponent {

  @Input() worldDetails: IWorldDetails | undefined;
}
