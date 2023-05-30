import { Component, Input } from '@angular/core';
import { ICreature } from '../../interfaces/ICreature';
import { IconDefinition, faHeart, faHatWizard, faBox } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-creature-card',
  templateUrl: './creature-card.component.html',
  styleUrls: ['./creature-card.component.scss']
})

export class CreatureCardComponent {
  @Input() creature: ICreature | undefined;
  @Input() isLoading: boolean | undefined;

  formatList(list: string[]) {
    if ( list !== null) {
      const formattedList = list.map(string => string.charAt(0).toUpperCase() + string.slice(1));
      return formattedList.join(', ');
    } else {
      return list
    }
  };


  faHeart: IconDefinition = faHeart;
  faHatWizard: IconDefinition = faHatWizard;
  faBox: IconDefinition = faBox;
}
