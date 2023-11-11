import { Component } from '@angular/core';
import { GuildFormService } from '../../services/guildForm.service';
import { LoaderService } from 'src/app/modules/core/services/loader.service';

@Component({
  selector: 'app-guild-card',
  templateUrl: './guild-card.component.html',
  styleUrls: ['./guild-card.component.scss']
})
export class GuildCardComponent {

  constructor(public guildData: GuildFormService, public loader: LoaderService) {}

}
