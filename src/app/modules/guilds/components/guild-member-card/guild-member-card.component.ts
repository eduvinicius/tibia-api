import { Component, Input } from '@angular/core';
import { IGuild, IGuildMembers } from '../../interfaces/IGuild';

@Component({
  selector: 'app-guild-member-card',
  templateUrl: './guild-member-card.component.html',
  styleUrls: ['./guild-member-card.component.scss']
})

export class GuildMemberCardComponent  {
  @Input() guildMembers: IGuildMembers[] | undefined;

  formatDate(date: string) {
    const newDate = new Date(date);
    return newDate.toLocaleDateString('pt-BR')
  };
}
