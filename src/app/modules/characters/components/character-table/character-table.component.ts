import { Component, Input } from '@angular/core';
import { ICharacter } from '../../interfaces/ICharacters';

@Component({
  selector: 'app-character-table',
  templateUrl: './character-table.component.html',
  styleUrls: ['./character-table.component.scss']
})

export class CharacterTableComponent  {

 @Input() character: ICharacter | undefined;
 @Input() isLoading: boolean | undefined;

 formatData(data: string): string {

  if ( data !== undefined ) {
    const newData: Date = new Date(data);
    return newData.toLocaleDateString("pt-BR")
  }

    return 'Não foi encontrado uma data'
 };

 hasComment(comment: string): string {
  return comment ? comment : comment = 'Não há comentário'
 };
}
