import { Component, Input } from '@angular/core';
import { ICreatureModel } from '../../interfaces/ICreature';
import { IconDefinition, faHeart, faHatWizard, faBox } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-creature-card',
  templateUrl: './creature-card.component.html',
  styleUrls: ['./creature-card.component.scss']
})

export class CreatureCardComponent {
  @Input() creature: ICreatureModel | undefined | null;
  @Input() isLoading: boolean | undefined | null;
  public faHeart: IconDefinition = faHeart;
  public faHatWizard: IconDefinition = faHatWizard;
  public faBox: IconDefinition = faBox;

  formatList(list: string[]): string {
    if ( list !== null) {
      const formattedList: string[] = list.map(string => string.charAt(0).toUpperCase() + string.slice(1));
      return formattedList.join(', ');
    } else {
      return list
    }
  };
}
