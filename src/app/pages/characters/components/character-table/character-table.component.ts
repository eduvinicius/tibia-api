import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { DatePipe } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { CharacterFormService } from '../../services/character-form.service';
import { LoaderService } from 'src/app/shared/services/loader.service';

import { ICharacterModel } from '../../interfaces/ICharacters';
import { LoaderComponent } from 'src/app/shared/components/loader/loader.component';

import { HasCommentPipe } from 'src/app/shared/pipes/hasComment.pipe';
@Component({
    selector: 'app-character-table',
    templateUrl: './character-table.component.html',
    styleUrls: ['./character-table.component.css'],
    standalone: true,
    imports: [LoaderComponent, DatePipe, HasCommentPipe]
})

export class CharacterTableComponent implements OnInit  {

 public characterData = signal<ICharacterModel | null>({} as ICharacterModel);
 private readonly _destroyRef = inject(DestroyRef);

 constructor(
    private readonly _charData: CharacterFormService,
    public loader: LoaderService
  ) {}

 ngOnInit(): void {
   this._charData.characterData$.pipe(takeUntilDestroyed(this._destroyRef)).subscribe((char) => {
     this.characterData.set(char)
   })
 }
}
