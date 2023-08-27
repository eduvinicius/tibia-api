import { Component } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { IGuildMembers, IGuildModel } from '../../interfaces/IGuild';

@Component({
  selector: 'app-guilds',
  templateUrl: './guilds.component.html',
  styleUrls: ['./guilds.component.scss']
})

export class GuildsComponent  {

  private _guild = new BehaviorSubject<IGuildModel | null>(null);
  private _isLoading = new BehaviorSubject<boolean>(false);
  private _guildMembers = new BehaviorSubject<IGuildMembers[] | null>(null);

  guildData(data: IGuildModel): void {
    this._guild.next(data)
  };

  get guild(): Observable<IGuildModel | null> {
    return this._guild.pipe(
      map((guild) => guild)
    )
  }

  isLoadingEvent(loader: boolean): void {
    this._isLoading.next(loader)
  };

  get isLoading(): Observable<boolean> {
    return this._isLoading.pipe(
      map((value) => value)
    )
  }

  guildMembersData(data: IGuildMembers[]): void {
    this._guildMembers.next(data)
  };

  get guildMembers(): Observable<IGuildMembers[] | null> {
    return this._guildMembers.pipe(
      map((members) => members)
    )
  }
}
