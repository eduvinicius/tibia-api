import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, Subject, startWith } from 'rxjs';
import { IGuildMembers, IGuildModel } from '../interfaces/IGuild';

@Injectable({
  providedIn: 'root'
})
export class GuildFormService {

  private _guildData$ = new Subject<IGuildModel>();
  private _guildMembers$ = new Subject<IGuildMembers[]>();
  public guildData$ = this._guildData$.asObservable();
  public guildMembers$ = this._guildMembers$.asObservable();
  public guildForm = this._createGuildForm();
  public guildFormValidation = new BehaviorSubject<boolean>(false);
  public showGuildOnTemplate = new BehaviorSubject<boolean>(false);

  constructor() { }

  public triggerGuildData(guild: IGuildModel, members?: IGuildMembers[]): void {
    this._guildData$.next(guild);
    if (members) this._guildMembers$.next(members);
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
