import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, catchError, map } from 'rxjs';

import { environment } from 'src/environments/environments';

import { CharacterMapper } from 'src/app/modules/characters/mappers/characterMapper'
;
import { ICharacterModel, ICharacterResponseDTO } from 'src/app/modules/characters/interfaces/ICharacters';

import { handleAPIError } from 'src/app/shared/utils/errors';


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
        catchError(error => handleAPIError(error))
      )
  }

}
