import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, map } from 'rxjs';

import { environment } from 'src/environments/environments';

import { IGuildModel, IGuildResponse } from 'src/app/pages/guilds/interfaces/IGuild';

import { GuildMapper } from 'src/app/pages/guilds/mappers/guildMapper';

@Injectable({
  providedIn: 'root'
})
export class GuildService {

  constructor(
    private readonly _http: HttpClient
  ) { }

  private readonly _apiURLGuild: string = environment.apiURLGuilds;
  private readonly _guildMapper = new GuildMapper();

  getGuildByName(name: string): Observable<IGuildModel> {
    return this._http.get<IGuildResponse>(`${this._apiURLGuild}${name}`)
      .pipe(
        map((guild) => {
          return this._guildMapper.mapFrom(guild)
        })
      )
  }
}
