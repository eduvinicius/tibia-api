import { Component, Input } from '@angular/core';
import { IGuildMembers } from '../../interfaces/IGuild';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-guild-member-card',
  templateUrl: './guild-member-card.component.html',
  styleUrls: ['./guild-member-card.component.scss']
})

export class GuildMemberCardComponent {
  @Input() guildMembers: Observable<IGuildMembers[] | null> | undefined;

}
