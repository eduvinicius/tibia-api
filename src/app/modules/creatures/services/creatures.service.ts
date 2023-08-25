import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environments';
import { Observable, catchError, map, throwError } from 'rxjs';
import { ICreaturesResponseDTO, ICreaturesListModel } from '../interfaces/ICreaturesList';
import { ICreatureModel, ICreatureResponseDTO } from '../interfaces/ICreature';
import { IBossesRequestDTO } from '../interfaces/IBossesList';
import { CreaturesListMapper } from '../mappers/creaturesListMapper';
import { CreatureMapper } from '../mappers/creatureMapper';

@Injectable({
  providedIn: 'root'
})
export class CreaturesService {

  private readonly apiCreatureURL: string = environment.apiURLCreature;
  private readonly apiCreatureByRaceURL: string = environment.URLCreatureByRace;
  private readonly apiBossesURL: string = environment.apiURLBosses;
  private readonly creatureListMapper = new CreaturesListMapper();
  private readonly creatureMapper = new CreatureMapper();

  constructor(private readonly http: HttpClient) { }

  getAllCreatures(): Observable<ICreaturesListModel[]> {
    return this.http.get<ICreaturesResponseDTO>(this.apiCreatureURL)
    .pipe(
      map(response => this.creatureListMapper.mapFrom(response)),
      catchError(error => this.handleError(error))
    )
  }

  getCreatureByRace(race: string): Observable<ICreatureModel> {
    return this.http.get<ICreatureResponseDTO>(`${this.apiCreatureByRaceURL}${race}`)
    .pipe(
      map(response => this.creatureMapper.mapFrom(response)),
      catchError(error => this.handleError(error))
    )
  }

  getAllBosses(): Observable<IBossesRequestDTO> {
    return this.http.get<IBossesRequestDTO>(this.apiBossesURL)
  }

  private handleError(error: Error): Observable<never> {
    console.error(`Ocorreu um erro: ${error}`);
    return throwError(error);
  }
}
