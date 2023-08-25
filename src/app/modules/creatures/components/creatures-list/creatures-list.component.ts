import { Component, Input } from '@angular/core';
import { ICreaturesListModel } from '../../interfaces/ICreaturesList';

@Component({
  selector: 'app-creatures-list',
  templateUrl: './creatures-list.component.html',
  styleUrls: ['./creatures-list.component.scss']
})
export class CreaturesListComponent {
  @Input() visibleCreatures: ICreaturesListModel[] | null = [];
}
