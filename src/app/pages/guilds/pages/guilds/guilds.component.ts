import { Component } from '@angular/core';
import { GuildFormService } from '../../services/guildForm.service';
import { GuildSearchFormComponent } from '../../components/guild-search-form/guild-search-form.component';
import { GuildCardComponent } from '../../components/guild-card/guild-card.component';

@Component({
    selector: 'app-guilds',
    templateUrl: './guilds.component.html',
    styleUrls: ['./guilds.component.css'],
    standalone: true,
    imports: [GuildSearchFormComponent, GuildCardComponent]
})

export class GuildsComponent  {

  constructor(public guildData: GuildFormService) {}
}
