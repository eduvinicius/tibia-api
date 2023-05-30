import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CreaturesService } from '../../services/creatures.service';
import { ICreature } from '../../interfaces/ICreature';


@Component({
  selector: 'app-creature-details',
  templateUrl: './creature-details.component.html',
  styleUrls: ['./creature-details.component.scss']
})

export class CreatureDetailsComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private creatureService: CreaturesService
    ) { }

    race: string = '';
    creature: ICreature | undefined;
    isLoading: boolean = false;

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.race =  params['id']
    })
    this.fetchCreatureData()
  };

  fetchCreatureData() {
    this.isLoading = true;
    this.creatureService.getCreatureByRace(this.race).subscribe({
      next: (data: ICreature) => {
        this.creature = data;
        this.isLoading = false;
      },
      error: (error) => {
        console.log(error);
        this.isLoading = false;
      }
    });
  };
}
