import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ICharacterModel } from '../../interfaces/ICharacters';
import { BehaviorSubject, Observable, Subject, takeUntil } from 'rxjs';
import { CharacterFormService } from '../../services/character-form.service';
import { LoaderService } from 'src/app/modules/core/services/loader.service';

@Component({
    selector: 'app-character-table',
    templateUrl: './character-table.component.html',
    styleUrls: ['./character-table.component.css'],
    standalone: false
})

export class CharacterTableComponent implements OnInit, OnDestroy  {

 public characterData$ = new BehaviorSubject<ICharacterModel | null>(null);
 public isLoading$ = new BehaviorSubject<boolean | null>(null);
 private _onDestroy$ = new Subject<void>();

 constructor(private _charData: CharacterFormService, private _loader: LoaderService) {}

 ngOnInit(): void {
   this._charData.characterData$.pipe(takeUntil(this._onDestroy$)).subscribe((char) => {
     this.characterData$.next(char)
   })

   this._loader.loading$.pipe(takeUntil(this._onDestroy$)).subscribe((value) => {
    this.isLoading$.next(value)
   })
 }

  ngOnDestroy(): void {
    this._onDestroy$.next();
  }
}
