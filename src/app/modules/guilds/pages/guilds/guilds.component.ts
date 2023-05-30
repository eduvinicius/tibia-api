import { Component } from '@angular/core';
import { IGuild, IGuildMembers } from '../../interfaces/IGuild';

@Component({
  selector: 'app-guilds',
  templateUrl: './guilds.component.html',
  styleUrls: ['./guilds.component.scss']
})

export class GuildsComponent  {

  guild: IGuild | undefined;
  isLoading: boolean | undefined;
  guildMembers: IGuildMembers[] | undefined;

  guildData(data: IGuild): void {
    this.guild = data
  };

  isLoadingEvent(loader: boolean): void {
    this.isLoading = loader
  };

  getGuildMembers(data: IGuildMembers[]): void {
    this.guildMembers = data
  };
}
