import { Component, Input } from '@angular/core';
import { GuildFormService } from '../../services/guildForm.service';
import { IGuildMembers } from '../../interfaces/IGuild';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-guild-member-card',
    templateUrl: './guild-member-card.component.html',
    styleUrls: ['./guild-member-card.component.css'],
    standalone: true,
    imports: [CommonModule, RouterModule]
})

export class GuildMemberCardComponent {

  @Input() members: IGuildMembers[] | undefined = []
  constructor(public guildData: GuildFormService) {}

}
