import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';

import { CharactersService } from 'src/app/core/services/api/characters.service';
import { CharacterFormService } from '../../services/character-form.service';
import { LoaderService } from 'src/app/core/services/loader.service';

import { ICharacterModel } from '../../interfaces/ICharacters';

import { CharacterTableComponent } from '../../components/character-table/character-table.component';

@Component({
    selector: 'app-character-details',
    templateUrl: './character-details.component.html',
    styleUrls: ['./character-details.component.css'],
    standalone: true,
    imports: [CharacterTableComponent]
})
export class CharacterDetailsComponent implements OnInit {

  constructor(
    private readonly _route: ActivatedRoute,
    private readonly _characterService: CharactersService,
    private readonly _charData: CharacterFormService,
    private readonly _loader: LoaderService
  ) {}

  private readonly _characterID = signal<string>('');
  private readonly _destroy$ = inject(DestroyRef);

  ngOnInit(): void {
    this._route.params.pipe(takeUntilDestroyed(this._destroy$)).subscribe(params => {
      this._characterID.set(params['id']);
    })
    this.getCharacterById();
  }

  getCharacterById(): void {
    this._loader.setLoading(true);
    this._characterService.getCharByName(this._characterID())
      .pipe(takeUntilDestroyed(this._destroy$))
      .subscribe({
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
}
