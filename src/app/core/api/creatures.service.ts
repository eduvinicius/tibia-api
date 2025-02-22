import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environments';
import { Observable, catchError, map, throwError } from 'rxjs';
import { ICreaturesResponseDTO, ICreaturesListModel } from '../../pages/creatures/interfaces/ICreaturesList';
import { ICreatureModel, ICreatureResponseDTO } from '../../pages/creatures/interfaces/ICreature';
import { IBossesListModel, IBossesResponseDTO } from '../../pages/creatures/interfaces/IBossesList';
import { CreaturesListMapper } from '../../pages/creatures/mappers/creaturesListMapper';
import { CreatureMapper } from '../../pages/creatures/mappers/creatureMapper';
import { BossesListMapper } from '../../pages/creatures/mappers/bossesListMapper';

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
    return this._http.get<ICreatureResponseDTO>(`${this._apiCreatureByRaceURL}${race}`)
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
