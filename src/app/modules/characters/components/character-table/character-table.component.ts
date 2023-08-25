import { Component, Input } from '@angular/core';
import { ICharacterWebDTO } from '../../interfaces/ICharacters';

@Component({
  selector: 'app-character-table',
  templateUrl: './character-table.component.html',
  styleUrls: ['./character-table.component.scss']
})

export class CharacterTableComponent  {

 @Input() character: ICharacterWebDTO | undefined;
 @Input() isLoading: boolean | undefined;

 hasComment(comment: string): string {
  return comment ? comment : comment = 'Não há comentário'
 };
}
