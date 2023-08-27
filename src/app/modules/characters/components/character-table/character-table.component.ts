import { Component, Input, OnInit } from '@angular/core';
import { ICharacterModel } from '../../interfaces/ICharacters';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-character-table',
  templateUrl: './character-table.component.html',
  styleUrls: ['./character-table.component.scss']
})

export class CharacterTableComponent implements OnInit  {

 @Input() character: Observable<ICharacterModel> | undefined;
 @Input() isLoading: Observable<boolean> | undefined;
 public characterData = new BehaviorSubject<ICharacterModel | null>(null);
 public isLoading$ = new BehaviorSubject<boolean | null>(null);

 ngOnInit(): void {
   this.character?.subscribe((char) => {
     this.characterData.next(char)
   })

   this.isLoading?.subscribe((value) => {
    this.isLoading$.next(value)
   })
 }

 hasComment(comment: string): string {
  return comment ? comment : comment = 'Não há comentário'
 };
}
