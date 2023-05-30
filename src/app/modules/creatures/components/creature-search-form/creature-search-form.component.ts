import { Component, EventEmitter, Output } from '@angular/core';
import { ICreature } from '../../interfaces/ICreature';
import { CreaturesService } from '../../services/creatures.service';


@Component({
  selector: 'app-creature-search-form',
  templateUrl: './creature-search-form.component.html',
  styleUrls: ['./creature-search-form.component.scss']
})

export class CreatureSearchFormComponent {

  constructor(private creaturesService: CreaturesService) {}

  @Output() creature = new EventEmitter<ICreature>();
  @Output() isLoading = new EventEmitter<boolean>();
  searchCreature: string = '';

  formatString(string: string): string {
    return string.replace(/\s/g, '').toLowerCase()
  };

  submitForm(): void {
    this.isLoading.emit(true)
    this.creaturesService.getCreatureByRace(this.formatString(this.searchCreature))
    .subscribe({
      next: (data: ICreature) => {
        this.creature.emit(data)
        this.isLoading.emit(false)

      },
      error: (error) => {
        console.log(error)
        this.isLoading.emit(false)
      }
  });
    this.searchCreature = '';
  };
}
