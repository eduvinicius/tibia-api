import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, throwError } from 'rxjs';
import { ICharacterModel, ICharacterResponseDTO } from '../../pages/characters/interfaces/ICharacters';
import { CharacterMapper } from '../../pages/characters/mappers/characterMapper';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(private readonly _http: HttpClient) { }

  URLapiChar: string = environment.apiURLCharacter;
  private readonly _characterMapper = new CharacterMapper();

  getCharByName(name: string): Observable<ICharacterModel> {
    return this._http.get<ICharacterResponseDTO>(`${this.URLapiChar}${name}`)
      .pipe(
        map(response => this._characterMapper.mapFrom(response)),
        catchError(error => this.handleError(error))
      )
  }

  private handleError(error: Error): Observable<never> {
    return throwError(() => new Error(error.message));
  }
}
