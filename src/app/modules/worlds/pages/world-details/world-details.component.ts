import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { WorldsService } from 'src/app/core/services/api/worlds.service';

import { IWorldDetails} from '../../interfaces/IWorldDetails';

import { LoaderComponent } from 'src/app/shared/components/loader/loader.component';
import { OnlinePlayersTableComponent } from '../../components/online-players-table/online-players-table.component';

import { formatArray } from 'src/app/shared/utils/format-arrays';
import { formatData } from 'src/app/shared/utils/format-data';

@Component({
    selector: 'app-world-details',
    templateUrl: './world-details.component.html',
    styleUrls: ['./world-details.component.css'],
    standalone: true,
    imports: [LoaderComponent, OnlinePlayersTableComponent]
})

export class WorldDetailsComponent implements OnInit {

  private readonly _destroyRef = inject(DestroyRef);

  public world = signal<string | null>(null);
  public worldDetails = signal<IWorldDetails | null>(null);
  public isLoading = signal<boolean>(false);

  public formatArray = formatArray;
  public formatData = formatData;

  constructor(
    private readonly _route: ActivatedRoute,
    private readonly _worldService: WorldsService
  ) {}


  ngOnInit(): void {
    this._route.params.subscribe(params => {
      this.world.set(params['id'])
    })
    this.fetchWorldData()
  };

  fetchWorldData(): void {
    this.isLoading.set(true);
    this._worldService.getWorldByName(this.world() ?? '')
    .pipe(takeUntilDestroyed(this._destroyRef))
      .subscribe({
      next: (data: IWorldDetails) => {
        this.worldDetails.set(data);
        this.isLoading.set(false);
      },
      error: (error) => {
        console.log(error);
        this.isLoading.set(false);
      }
    });
  };
}
