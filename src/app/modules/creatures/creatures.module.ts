import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CreaturesRoutingModule } from './creatures-routing.module';
import { SharedModule } from '../shared/shared.module';

import { FormatListPipe } from '../core/pipes/formatList.pipe';

import { CreaturesService } from './services/creatures.service';

import { CreaturesComponent } from './pages/creatures/creatures.component';
import { CreatureCardComponent } from './components/creature-card/creature-card.component';
import { CreatureSearchFormComponent } from './components/creature-search-form/creature-search-form.component';
import { CreatureSearchComponent } from './pages/creature-search/creature-search.component';
import { CreatureDetailsComponent } from './pages/creature-details/creature-details.component';
import { BossesListComponent } from './pages/bosses-list/bosses-list.component';
import { CreaturesListComponent } from './components/creatures-list/creatures-list.component';
import { ButtonComponent } from './components/button/button.component';



@NgModule({
  declarations: [
    CreaturesComponent,
    CreatureCardComponent,
    CreatureSearchFormComponent,
    CreatureSearchComponent,
    CreatureDetailsComponent,
    BossesListComponent,
    CreaturesListComponent,
    ButtonComponent
  ],
  providers: [
    CreaturesService
  ],
  imports: [
    CommonModule,
    CreaturesRoutingModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule,
    SharedModule,
    ReactiveFormsModule,
    FormatListPipe
  ]
})
export class CreaturesModule { }
