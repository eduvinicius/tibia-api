import { Component } from '@angular/core';

import { CreatureSearchFormComponent } from '../../components/creature-search-form/creature-search-form.component';
import { CreatureCardComponent } from '../../components/creature-card/creature-card.component';

@Component({
    selector: 'app-creature-search',
    templateUrl: './creature-search.component.html',
    styleUrls: ['./creature-search.component.css'],
    standalone: true,
    imports: [CreatureSearchFormComponent, CreatureCardComponent]
})

export class CreatureSearchComponent  {

  constructor() {}
}
