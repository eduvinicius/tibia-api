import { Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  private readonly _loading$ = new BehaviorSubject<boolean>(false);
  public loading$ = this._loading$.asObservable();
  private readonly _loading = signal<boolean>(false);
  public loading = this._loading.asReadonly();

  public setLoading(isLoading: boolean): void {
    this._loading.set(isLoading);
  };

  constructor() { }

}
