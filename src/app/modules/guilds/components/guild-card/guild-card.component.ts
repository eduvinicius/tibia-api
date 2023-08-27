import { Component, Input, OnInit } from '@angular/core';
import { IGuildModel } from '../../interfaces/IGuild';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-guild-card',
  templateUrl: './guild-card.component.html',
  styleUrls: ['./guild-card.component.scss']
})
export class GuildCardComponent {

  @Input() guildData: Observable<IGuildModel | null> | undefined;
  @Input() isLoading: Observable<boolean> | undefined;

}
