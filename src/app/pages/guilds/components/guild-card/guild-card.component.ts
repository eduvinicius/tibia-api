import { Component } from '@angular/core';
import { GuildFormService } from '../../services/guildForm.service';
import { LoaderService } from 'src/app/shared/services/loader.service';
import { LoaderComponent } from 'src/app/shared/components/loader/loader.component';
import { GuildMemberCardComponent } from '../guild-member-card/guild-member-card.component';
import { AsyncPipe, DatePipe } from '@angular/common';

@Component({
    selector: 'app-guild-card',
    templateUrl: './guild-card.component.html',
    styleUrls: ['./guild-card.component.css'],
    standalone: true,
    imports: [LoaderComponent, GuildMemberCardComponent, AsyncPipe, DatePipe]
})
export class GuildCardComponent {

  constructor(public guildData: GuildFormService, public loader: LoaderService) {}

}
