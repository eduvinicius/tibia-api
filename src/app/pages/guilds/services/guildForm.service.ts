import { Injectable, signal } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

import { IGuildMembers, IGuildModel } from '../interfaces/IGuild';
@Injectable({
  providedIn: 'root'
})
export class GuildFormService {

  public readonly guildData = signal<IGuildModel | null>({} as IGuildModel);
  public guildMembers = signal<IGuildMembers[]>([]);
  public guildForm = this._createGuildForm();
  public guildFormValidation = signal<boolean>(false);

  constructor() { }

  public triggerGuildData(guild: IGuildModel | null, members?: IGuildMembers[]): void {
    this.guildData.set(guild);
    if (members) this.guildMembers.set(members);
  }

  private _createGuildForm(): FormGroup {
    return new FormGroup({
      guildName: new FormControl('', [Validators.required])
    })
  }

  get guildName(): AbstractControl<string> {
    return this.guildForm.get('guildName')!
  }
}
