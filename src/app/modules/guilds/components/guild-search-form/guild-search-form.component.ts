import { Component, DestroyRef, effect, inject, output, signal } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { GuildService } from 'src/app/core/services/api/guild.service';
import { GuildFormService } from '../../services/guildForm.service';
import { LoaderService } from 'src/app/core/services/loader.service';

import { IGuildModel, IGuildMembers } from '../../interfaces/IGuild';
import { IGuildForm } from '../../interfaces/IGuildForm';

@Component({
    selector: 'app-guild-search-form',
    templateUrl: './guild-search-form.component.html',
    styleUrls: ['./guild-search-form.component.css'],
    standalone: true,
    imports: [ReactiveFormsModule]
})
export class GuildSearchFormComponent {

  private readonly _destroyRef = inject(DestroyRef);
  isLoading = output<boolean>();
  timeoutDuration = signal<number | null>(null);

  constructor(
    private readonly _guildService: GuildService,
    private readonly _loader: LoaderService,
    public guildFormService: GuildFormService
  ) {

    effect(() => {
      const duration = this.timeoutDuration();
      if (duration === null) return;
      const timeoutId = setTimeout(() => {
        this.guildFormService.guildFormValidation.set(false)
        this.timeoutDuration.set(null);
      }, duration);
      return () => clearTimeout(timeoutId);
    });

  }

  submitForm(): void {

    if (this.guildFormService.guildForm.valid) {
      this._loader.setLoading(true);
      const formData = this.guildFormService.guildForm.value as IGuildForm;
      this._guildService.getGuildByName(formData.guildName)
        .pipe(takeUntilDestroyed(this._destroyRef))
        .subscribe({
        next: (data: IGuildModel) => {
          this.handleGuildData(data);
          this._loader.setLoading(false);
        },
        error: (error) => {
          console.log(error);
          this.handleGuildData(null)
          this._loader.setLoading(false);
        }
      });
      this.guildFormService.guildForm.reset();
      return
    }
      this.guildFormService.guildFormValidation.set(true);
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

  public handleGuildData(guildData: IGuildModel | null): void {
    const members = guildData?.members;
    if (members) {
      const sortedMembers = this.orderGuildMembersByStatus(members);
      this.guildFormService.triggerGuildData(guildData, sortedMembers);
      return
    }
    this.guildFormService.triggerGuildData(guildData);
  }

  public handleTimeout(time: number): void {
    this.timeoutDuration.set(time);
  }
}
