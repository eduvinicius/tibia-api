import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, throwError } from 'rxjs';
import { ICharacterModel, ICharacterResponseDTO } from '../interfaces/ICharacters';
import { CharacterMapper } from '../mappers/characterMapper';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(private http: HttpClient) { }

  URLapiChar: string = environment.apiURLCharacter;
  private readonly _characterMapper = new CharacterMapper();

  getCharByName(name: string): Observable<ICharacterModel> {
    return this.http.get<ICharacterResponseDTO>(`${this.URLapiChar}${name}`)
      .pipe(
        map(response => this._characterMapper.mapFrom(response)),
        catchError(error => this.handleError(error))
      )
  }

  private handleError(error: Error): Observable<never> {
    console.error(`Ocorreu um erro: ${error}`);
    return throwError(error);
  }
}
