import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ICreatureModel } from '../../interfaces/ICreature';
import { CreatureFormService } from '../../services/creature-form.service';
import { LoaderService } from 'src/app/shared/services/loader.service';
import { Observable, Subject, map, takeUntil } from 'rxjs';
import { LoaderComponent } from 'src/app/shared/components/loader/loader.component';
import { FormatListPipe } from 'src/app/shared/pipes/formatList.pipe';



@Component({
    selector: 'app-creature-card',
    templateUrl: './creature-card.component.html',
    styleUrls: ['./creature-card.component.css'],
    standalone: true,
    imports: [LoaderComponent, FormatListPipe]
})

export class CreatureCardComponent implements OnInit, OnDestroy {
  private _onDestroy$: Subject<void> = new Subject<void>();
  public creature = this.getCreatureData();
  public isLoading: boolean = false;

  constructor(private _creatureFormService: CreatureFormService, private _loadingService: LoaderService) {}

  ngOnInit(): void {
    this.loading();
  }

  public getCreatureData(): Observable<ICreatureModel> {
    return this._creatureFormService.creatureData$.pipe(map((creature) => {
      return creature;
    }));
  }

  public loading(): void {
    this._loadingService.loading$
    .pipe(takeUntil(this._onDestroy$))
    .subscribe((isLoading) => {
      this.isLoading = isLoading
    })
  }

 public ngOnDestroy(): void {
    this._onDestroy$.next();
  }
}
