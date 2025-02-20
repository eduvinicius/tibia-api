import { Component, Input } from '@angular/core';
import { IRegularWorlds } from '../../interfaces/IWorlds';

@Component({
    selector: 'app-worlds-table',
    templateUrl: './worlds-table.component.html',
    styleUrls: ['./worlds-table.component.css'],
    standalone: true
})
export class WorldsTableComponent {

  @Input() worlds: IRegularWorlds[] = [];
  @Input() isLoading: boolean | undefined;

}
