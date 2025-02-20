import { Component, EventEmitter, Output } from '@angular/core';
import { GuildService } from '../../services/guild.service';
import { IGuildModel, IGuildMembers } from '../../interfaces/IGuild';
import { IGuildForm } from '../../interfaces/IGuildForm';
import { GuildFormService } from '../../services/guildForm.service';
import { LoaderService } from 'src/app/shared/services/loader.service';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'app-guild-search-form',
    templateUrl: './guild-search-form.component.html',
    styleUrls: ['./guild-search-form.component.css'],
    standalone: true,
    imports: [ReactiveFormsModule]
})
export class GuildSearchFormComponent {

  @Output() isLoading = new EventEmitter<boolean>();

  constructor(
    private _guildService: GuildService,
    private _loader: LoaderService,
    public guildFormService: GuildFormService
  ) {}

  submitForm(): void {

    if (this.guildFormService.guildForm.valid) {
      this.guildFormService.showGuildOnTemplate.next(true)
      this._loader.setLoading(true);
      const formData = this.guildFormService.guildForm.value as IGuildForm;
      this._guildService.getGuildByName(formData.guildName).subscribe({
        next: (data: IGuildModel) => {
          this.handleGuildData(data);
          this._loader.setLoading(false);
        },
        error: (error) => {
          console.log(error);
          this._loader.setLoading(false);
        }
      });
      this.guildFormService.guildForm.reset();
      return
    }
      this.guildFormService.guildFormValidation.next(true);
      this.handleTimeout(3000);
  }

  public orderGuildMembersByStatus(members: IGuildMembers[]): IGuildMembers[] {
   const sortedMembers: IGuildMembers[] = members.sort((memberA, memberB) => {
      if ( memberA.status.toLowerCase() === "online"
        && memberB.status.toLowerCase() === "offline" ) {
        return -1; // memberA vem antes de memberB
      } else if ( memberA.status.toLowerCase() === "offline"
        && memberB.status.toLowerCase() === "online" ) {
        return 1; // memberA vem depois de memberB
      } else {
        return 0; // manter a ordem atual
      }
    });
    return sortedMembers;
  }

  public handleGuildData(guildData: IGuildModel): void {
    const members: IGuildMembers[] = guildData.members;
    if (members) {
      const sortedMembers = this.orderGuildMembersByStatus(members);
      this.guildFormService.triggerGuildData(guildData, sortedMembers);
      return
    }
    this.guildFormService.triggerGuildData(guildData);
  }

  public handleTimeout(time: number): void {
    setTimeout(() => {
      this.guildFormService.guildFormValidation.next(false)
    }, time);
  }
}
