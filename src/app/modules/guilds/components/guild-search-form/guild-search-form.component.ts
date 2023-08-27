import { Component, EventEmitter, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { GuildService } from '../../services/guild.service';
import { IGuildModel, IGuildMembers } from '../../interfaces/IGuild';
import { IGuildForm } from '../../interfaces/IGuildForm';

@Component({
  selector: 'app-guild-search-form',
  templateUrl: './guild-search-form.component.html',
  styleUrls: ['./guild-search-form.component.scss']
})
export class GuildSearchFormComponent {

  @Output() guild = new EventEmitter<IGuildModel>();
  @Output() guildMembers = new EventEmitter<IGuildMembers[]>();
  @Output() isLoading = new EventEmitter<boolean>();
  public guildForm: FormGroup;
  public guildFormValidation = new BehaviorSubject<boolean>(false);

  constructor(private guildService: GuildService) {
    this.guildForm = new FormGroup({
      guildName: new FormControl('', [Validators.required])
    })
  }

  get guildName(): AbstractControl<string> {
    return this.guildForm.get('guildName')!
  }

  submitForm(): void {

    if (this.guildForm.valid) {
      this.isLoading.emit(true)
      const formData = this.guildForm.value as IGuildForm;
      this.guildService.getGuildByName(formData.guildName).subscribe({
        next: (data: IGuildModel) => {
          this.handleGuildData(data);
        },
        error: (error) => {
          console.log(error);
          this.isLoading.emit(false);
        }
      });
      this.guildForm.reset();
    } else {
      this.guildFormValidation.next(true);
      this.handleTimeout(3000);
    }
  }

  orderGuildMembersByStatus(members: IGuildMembers[]): void {
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
    this.guildMembers.emit(sortedMembers);
  }

  handleGuildData(data: IGuildModel): void {
    const members: IGuildMembers[] = data.members;
    if (data.active) {
      this.orderGuildMembersByStatus(members);
    }
    this.guild.emit(data);
    this.isLoading.emit(false);
  }

  handleTimeout(time: number): void {
    setTimeout(() => {
      this.guildFormValidation.next(false)
    }, time);
  }
}
