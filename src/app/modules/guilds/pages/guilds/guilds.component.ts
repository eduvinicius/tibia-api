import { Component } from '@angular/core';

import { GuildFormService } from '../../services/guildForm.service';
import { LoaderService } from 'src/app/core/services/loader.service';

import { GuildSearchFormComponent } from '../../components/guild-search-form/guild-search-form.component';
import { GuildCardComponent } from '../../components/guild-card/guild-card.component';
import { LoaderComponent } from 'src/app/shared/components/loader/loader.component';
@Component({
    selector: 'app-guilds',
    templateUrl: './guilds.component.html',
    styleUrls: ['./guilds.component.css'],
    standalone: true,
    imports: [GuildSearchFormComponent, GuildCardComponent, LoaderComponent]
})

export class GuildsComponent  {

  constructor(
    public guildFormService: GuildFormService,
    public loader: LoaderService
  ) {}
}
