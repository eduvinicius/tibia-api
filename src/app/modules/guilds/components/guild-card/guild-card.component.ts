import { Component, Input } from '@angular/core';
import { IGuild } from '../../interfaces/IGuild';

@Component({
  selector: 'app-guild-card',
  templateUrl: './guild-card.component.html',
  styleUrls: ['./guild-card.component.scss']
})
export class GuildCardComponent {

  @Input() guild: IGuild | undefined;
  @Input() isLoading: boolean | undefined;

  formatDate(date: string) {
    const newDate = new Date(date)
    return newDate.toLocaleDateString('pt-BR')
  }
}
