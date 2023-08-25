import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CreaturesService } from '../../services/creatures.service';
import { ICreatureModel } from '../../interfaces/ICreature';
import { CreatureMapper } from '../../mappers/creatureMapper';
import { BehaviorSubject } from 'rxjs';


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

    private _race: string = '';
    public creature: ICreatureModel | undefined;
    public isLoading = new BehaviorSubject<boolean>(false);

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this._race =  params['id']
    })
    this.getCreatureByRace()
  };

  getCreatureByRace() {
    this.isLoading.next(true);
    this.creatureService.getCreatureByRace(this._race).subscribe({
      next: (data: ICreatureModel) => {
        this.handleCreatureData(data)
      },
      error: (error) => {
        console.log(error);
        this.isLoading.next(false);
      }
    });
  };

  handleCreatureData(data:ICreatureModel) {
    this.creature = data
    this.isLoading.next(false);
  }
}
