import { Component } from '@angular/core';
import { GuildFormService } from '../../services/guildForm.service';

@Component({
    selector: 'app-guilds',
    templateUrl: './guilds.component.html',
    styleUrls: ['./guilds.component.scss'],
    standalone: false
})

export class GuildsComponent  {

  constructor(public guildData: GuildFormService) {}
}
