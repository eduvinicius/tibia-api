import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environments';
import { IGuild } from '../interfaces/IGuild';
import { HttpClient } from '@angular/common/http';
import { IMemberDetails } from '../interfaces/IMemberDetails';

@Injectable({
  providedIn: 'root'
})
export class GuildService {

  constructor(private http: HttpClient) { }

  apiURLGuild: string = environment.apiURLGuilds;
  apiURLMembersGuild: string = environment.apiURLCharacter;

  getGuildByName(name: string): Observable<IGuild> {
    return this.http.get<IGuild>(`${this.apiURLGuild}${name}`)
  }

  getGuildMembers(name: string): Observable<IMemberDetails> {
    return this.http.get<IMemberDetails>(`${this.apiURLMembersGuild}${name}`)
  }
}
