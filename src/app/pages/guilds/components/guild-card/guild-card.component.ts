import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';

import { GuildFormService } from '../../services/guildForm.service';
import { LoaderService } from 'src/app/shared/services/loader.service';

import { GuildMemberCardComponent } from '../guild-member-card/guild-member-card.component';

@Component({
    selector: 'app-guild-card',
    templateUrl: './guild-card.component.html',
    styleUrls: ['./guild-card.component.css'],
    standalone: true,
    imports: [GuildMemberCardComponent, DatePipe]
})
export class GuildCardComponent {

  constructor(
    public guildFormService: GuildFormService,
    public loader: LoaderService) {}

}
