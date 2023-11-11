import { Component, Input } from '@angular/core';
import { GuildFormService } from '../../services/guildForm.service';
import { IGuildMembers } from '../../interfaces/IGuild';

@Component({
  selector: 'app-guild-member-card',
  templateUrl: './guild-member-card.component.html',
  styleUrls: ['./guild-member-card.component.scss']
})

export class GuildMemberCardComponent {

  @Input() members: IGuildMembers[] | undefined = []
  constructor(public guildData: GuildFormService) {}

}
