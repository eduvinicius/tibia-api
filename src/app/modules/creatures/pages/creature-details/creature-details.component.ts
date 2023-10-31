import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CreaturesService } from '../../services/creatures.service';
import { ICreatureModel } from '../../interfaces/ICreature';
import { Subject, takeUntil } from 'rxjs';
import { CreatureFormService } from '../../services/creature-form.service';
import { LoaderService } from 'src/app/modules/core/services/loader.service';


@Component({
  selector: 'app-creature-details',
  templateUrl: './creature-details.component.html',
  styleUrls: ['./creature-details.component.scss']
})

export class CreatureDetailsComponent implements OnInit, OnDestroy {

  constructor(
    private route: ActivatedRoute,
    private creatureService: CreaturesService,
    public creatureFormService: CreatureFormService,
    private _loaderService: LoaderService
    ) { }

    private _race: string = '';
    private _onDestroy$ = new Subject<void>();

  ngOnInit(): void {
    this.getParamsUrl();
    this.getCreatureByRace();
  };

  public getParamsUrl():void {
    this.route.params
    .pipe(takeUntil(this._onDestroy$))
    .subscribe(params => {
      this._race =  params['id']
    })
  }

  public getCreatureByRace(): void {
    this._loaderService.setLoading(true);
    this.creatureService.getCreatureByRace(this._race)
    .pipe(takeUntil(this._onDestroy$))
    .subscribe({
      next: (data: ICreatureModel) => {
        this.creatureFormService.notifyOnCreatureChanged(data)
        this._loaderService.setLoading(false);
      },
      error: (error) => {
        console.log(error);
        this._loaderService.setLoading(false);
      }
    });
  };

  ngOnDestroy(): void {
    this._onDestroy$.next();
  }
}
