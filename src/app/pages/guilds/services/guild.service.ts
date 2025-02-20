import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environments';
import { IGuildModel, IGuildResponse } from '../interfaces/IGuild';
import { GuildMapper } from '../mappers/guildMapper';

@Injectable({
  providedIn: 'root'
})
export class GuildService {

  constructor(private http: HttpClient) { }

  private _apiURLGuild: string = environment.apiURLGuilds;
  private _guildMapper = new GuildMapper();

  getGuildByName(name: string): Observable<IGuildModel> {
    return this.http.get<IGuildResponse>(`${this._apiURLGuild}${name}`)
      .pipe(
        map((guild) => this._guildMapper.mapFrom(guild))
      )
  }
}
