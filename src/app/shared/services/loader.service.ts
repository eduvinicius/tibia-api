import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  private readonly _loading$ = new BehaviorSubject<boolean>(false);
  public loading$ = this._loading$.asObservable();

  public setLoading(isLoading: boolean): void {
    this._loading$.next(isLoading);
  };

constructor() { }

}
