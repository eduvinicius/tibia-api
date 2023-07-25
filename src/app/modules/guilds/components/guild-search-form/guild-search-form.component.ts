import { Component, EventEmitter, Output } from '@angular/core';
import { GuildService } from '../../services/guild.service';
import { IGuild, IGuildMembers } from '../../interfaces/IGuild';

@Component({
  selector: 'app-guild-search-form',
  templateUrl: './guild-search-form.component.html',
  styleUrls: ['./guild-search-form.component.scss']
})
export class GuildSearchFormComponent {

  constructor(private guildService: GuildService) {}

  @Output() guild = new EventEmitter<IGuild>();
  @Output() guildMembers = new EventEmitter<IGuildMembers[]>();
  @Output() isLoading = new EventEmitter<boolean>();
  searchGuild: string = '';

  submitForm(): void {
    this.isLoading.emit(true)
    this.guildService.getGuildByName(this.searchGuild).subscribe({
      next: (data: IGuild) => {
        const members: IGuildMembers[] = data.guilds.guild.members;
        members.sort((memberA, memberB) => {
          if (memberA.status.toLowerCase() === "online" && memberB.status.toLowerCase() === "offline") {
            return -1; // memberA vem antes de memberB
          } else if (memberA.status.toLowerCase() === "offline" && memberB.status.toLowerCase() === "online") {
            return 1; // memberA vem depois de memberB
          } else {
            return 0; // manter a ordem atual
          }
        })
        this.guild.emit(data)
        this.guildMembers.emit(members)
        this.isLoading.emit(false)
      },
      error: (error) => {
        console.log(error)
        this.isLoading.emit(false)
      }
    });

    this.searchGuild = '';
  }
}
