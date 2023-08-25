import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICharacterRequestDTO } from '../interfaces/ICharacters';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(private http: HttpClient) { }

  URLapiChar: string = environment.apiURLCharacter;

  getCharByName(name: string): Observable<ICharacterRequestDTO> {
    return this.http.get<ICharacterRequestDTO>(`${this.URLapiChar}${name}`)
  }
}
