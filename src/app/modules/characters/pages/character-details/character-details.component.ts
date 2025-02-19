import { Component, OnDestroy, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { CharactersService } from '../../services/characters.service';

import { ICharacterModel } from '../../interfaces/ICharacters';
import { BehaviorSubject, Observable, Subject, take, takeUntil } from 'rxjs';
import { CharacterFormService } from '../../services/character-form.service';
import { LoaderService } from 'src/app/modules/core/services/loader.service';

@Component({
    selector: 'app-character-details',
    templateUrl: './character-details.component.html',
    styleUrls: ['./character-details.component.scss'],
    standalone: false
})
export class CharacterDetailsComponent implements OnInit, OnDestroy {

  constructor(
    private _route: ActivatedRoute,
    private _characterService: CharactersService,
    private _charData: CharacterFormService,
    private _loader: LoaderService
  ) {}

  private _characterID: string = '';
  private _onDestroy$ = new Subject<void>();

  ngOnInit(): void {
    this._route.params.pipe(takeUntil(this._onDestroy$)).subscribe(params => {
      this._characterID = params['id'];
    })
    this.getCharacterById();
  }

  getCharacterById(): void {
    this._loader.setLoading(true);
    this._characterService.getCharByName(this._characterID).pipe(takeUntil(this._onDestroy$)).subscribe({
      next: (character: ICharacterModel) => {
        this._charData.triggerCharacterData(character)
        this._loader.setLoading(false);
      },
      error: (error) => {
        console.log(error);
        this._loader.setLoading(false);
      }
    })
  }

  ngOnDestroy(): void {
    this._onDestroy$.next();
  }
}
