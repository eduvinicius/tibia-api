import { Injectable } from '@angular/core';
import { CreaturesAPI } from 'src/interfaces/creatureInterface';
import { environment } from 'src/environments/environments';

import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CreaturesService {

  apiCreatureURL: string = environment.apiURLCreature;

  constructor(private http: HttpClient) { }

  getCreatures(): Observable<CreaturesAPI> {
    return this.http.get<CreaturesAPI>(this.apiCreatureURL);
  }
}
