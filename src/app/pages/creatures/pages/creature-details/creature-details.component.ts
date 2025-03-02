import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { CreaturesService } from 'src/app/shared/services/api/creatures.service';
import { CreatureFormService } from '../../services/creature-form.service';
import { LoaderService } from 'src/app/shared/services/loader.service';

import { ICreatureModel } from '../../interfaces/ICreature';

import { CreatureCardComponent } from '../../components/creature-card/creature-card.component';
@Component({
    selector: 'app-creature-details',
    templateUrl: './creature-details.component.html',
    styleUrls: ['./creature-details.component.css'],
    standalone: true,
    imports: [CreatureCardComponent]
})

export class CreatureDetailsComponent implements OnInit {

  constructor(
    private readonly route: ActivatedRoute,
    private readonly creatureService: CreaturesService,
    private readonly _loaderService: LoaderService,
    public creatureFormService: CreatureFormService
    ) { }

    private readonly _race = signal<string>('');
    private readonly _destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    this.getParamsUrl();
    this.getCreatureByRace();
  };

  public getParamsUrl():void {
    this.route.params
    .pipe(takeUntilDestroyed(this._destroyRef))
    .subscribe(params => {
      this._race.set(params['id']);
    })
  }

  public getCreatureByRace(): void {
    this._loaderService.setLoading(true);
    this.creatureService.getCreatureByRace(this._race())
    .pipe(takeUntilDestroyed(this._destroyRef))
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
}
