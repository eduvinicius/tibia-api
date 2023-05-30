import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IWorlds } from '../interfaces/IWorlds';
import { environment } from 'src/environments/environments';
import { IWorldsDetails } from '../interfaces/IWorldDetails';

@Injectable({
  providedIn: 'root'
})
export class WorldsService {

  constructor(private http: HttpClient) { }

  apiURLWorlds: string = environment.apiURLWorlds;
  apiURLWorldDetails: string = environment.apiURLWorldDetails;

  getWorlds(): Observable<IWorlds> {
    return this.http.get<IWorlds>(this.apiURLWorlds)
  }

  getWorldByName(name: string): Observable<IWorldsDetails> {
    return this.http.get<IWorldsDetails>(`${this.apiURLWorldDetails}${name}`)
  }
}
