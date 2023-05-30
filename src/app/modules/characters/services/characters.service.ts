import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICharacterData } from '../interfaces/ICharacters';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(private http: HttpClient) { }

  URLapiChar = environment.apiURLCharacter;

  getCharByName(name: string): Observable<ICharacterData> {
    return this.http.get<ICharacterData>(`${this.URLapiChar}${name}`)
  }
}
