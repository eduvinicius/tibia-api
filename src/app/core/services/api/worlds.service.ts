import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { IWorlds } from 'src/app/modules/worlds/interfaces/IWorlds';
import { IWorldDetails } from 'src/app/modules/worlds/interfaces/IWorldDetails';

import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class WorldsService {

  constructor(private readonly _http: HttpClient) { }

  apiURLWorlds: string = environment.apiURLWorlds;
  apiURLWorldDetails: string = environment.apiURLWorldDetails;

  getWorlds(): Observable<IWorlds> {
    return this._http.get<IWorlds>(this.apiURLWorlds)
  }

  getWorldByName(name: string): Observable<IWorldDetails> {
    return this._http.get<IWorldDetails>(`${this.apiURLWorldDetails}${name}`)
  }
}
