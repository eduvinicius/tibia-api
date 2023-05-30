import { Component, Input } from '@angular/core';
import { ICreaturesList } from '../../interfaces/ICreaturesList';

@Component({
  selector: 'app-creatures-list',
  templateUrl: './creatures-list.component.html',
  styleUrls: ['./creatures-list.component.scss']
})
export class CreaturesListComponent {


  isLoading: boolean = false;
  @Input() visibleCreatures: ICreaturesList[] = [];


}
