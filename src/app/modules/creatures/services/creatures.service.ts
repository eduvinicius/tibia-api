import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environments';

import { Observable } from 'rxjs';

import { ICreatures } from '../interfaces/ICreaturesList';
import { ICreature } from '../interfaces/ICreature';

import { IBosses } from '../interfaces/IBossesList';

@Injectable({
  providedIn: 'root'
})
export class CreaturesService {

  apiCreatureURL: string = environment.apiURLCreature;
  apiCreatureByRaceURL: string = environment.URLCreatureByRace;
  apiBossesURL: string = environment.apiURLBosses;

  constructor(private http: HttpClient) { }

  getCreatures(): Observable<ICreatures> {
    return this.http.get<ICreatures>(this.apiCreatureURL);
  }

  getCreatureByRace(race: string): Observable<ICreature> {
    return this.http.get<ICreature>(`${this.apiCreatureByRaceURL}${race}`)
  }

  getBosses(): Observable<IBosses> {
    return this.http.get<IBosses>(this.apiBossesURL)
  }
}
