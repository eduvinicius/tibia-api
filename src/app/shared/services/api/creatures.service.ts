import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environments';

import { Observable, catchError, map, throwError } from 'rxjs';

import { formatEmptySpaceString } from 'src/app/shared/utils/format-empty-space';

import { IBossesListModel, IBossesResponseDTO } from 'src/app/pages/creatures/interfaces/IBossesList';
import { ICreatureModel, ICreatureResponseDTO } from 'src/app/pages/creatures/interfaces/ICreature';
import { ICreaturesListModel, ICreaturesResponseDTO } from 'src/app/pages/creatures/interfaces/ICreaturesList';

import { BossesListMapper } from 'src/app/pages/creatures/mappers/bossesListMapper';
import { CreatureMapper } from 'src/app/pages/creatures/mappers/creatureMapper';
import { CreaturesListMapper } from 'src/app/pages/creatures/mappers/creaturesListMapper';

@Injectable({
  providedIn: 'root'
})
export class CreaturesService {

  private readonly _apiCreatureURL: string = environment.apiURLCreature;
  private readonly _apiCreatureByRaceURL: string = environment.URLCreatureByRace;
  private readonly _apiBossesURL: string = environment.apiURLBosses;

  private readonly _creatureListMapper = new CreaturesListMapper();
  private readonly _creatureMapper = new CreatureMapper();
  private readonly _bossesListMapper = new BossesListMapper();

  constructor(private readonly _http: HttpClient) { }

  public getAllCreatures(): Observable<ICreaturesListModel[]> {
    return this._http.get<ICreaturesResponseDTO>(this._apiCreatureURL)
      .pipe(
        map(response => this._creatureListMapper.mapFrom(response)),
        catchError(error => this._handleError(error))
      )
  }

  public getCreatureByRace(race: string): Observable<ICreatureModel> {
    const formattedRace = formatEmptySpaceString(race, true);
    return this._http.get<ICreatureResponseDTO>(`${this._apiCreatureByRaceURL}${formattedRace}`)
      .pipe(
        map(response => this._creatureMapper.mapFrom(response)),
        catchError(error => this._handleError(error))
      )
  }

  public getAllBosses(): Observable<IBossesListModel[]> {
    return this._http.get<IBossesResponseDTO>(this._apiBossesURL)
      .pipe(
        map(response => this._bossesListMapper.mapFrom(response)),
        catchError(error => this._handleError(error))
      )
  }

  private _handleError(error: Error): Observable<never> {
    return throwError(() => new Error(error.message));
  }
}
