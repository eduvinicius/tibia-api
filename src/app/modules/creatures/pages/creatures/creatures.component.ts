import { RouterLink } from '@angular/router';
import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { ICreaturesListModel } from '../../interfaces/ICreaturesList';

import { CreaturesService } from 'src/app/core/services/api/creatures.service';
import { LoaderService } from 'src/app/core/services/loader.service';

import { LoaderComponent } from 'src/app/shared/components/loader/loader.component';
import { CreaturesListComponent } from '../../components/creatures-list/creatures-list.component';

@Component({
    selector: 'app-creatures',
    templateUrl: './creatures.component.html',
    standalone: true,
    imports: [LoaderComponent, CreaturesListComponent, RouterLink]
})

export class CreaturesComponent implements OnInit {

    constructor(
      private readonly _creaturesService: CreaturesService,
      public loaderService: LoaderService
    ) {}

    public readonly creaturesList = signal<ICreaturesListModel[]>([]);
    private readonly _chunkSize: number = 10;
    private readonly _currentPage = signal<number>(1);
    private readonly _destroyRef = inject(DestroyRef);

    public btnTitle = signal<string>('Ver mais');

    // public visibleCreatures = computed(() => {
    //   const startIndex = 0;
    //   const endIndex = this._currentPage() * this._chunkSize;
    //   return this.creaturesList().slice(startIndex, endIndex);
    // });

    ngOnInit(): void {
      this.getCreaturesListData();
    };

    getCreaturesListData(): void {
      this.loaderService.setLoading(true);
       this._creaturesService.getAllCreatures()
        .pipe(takeUntilDestroyed(this._destroyRef))
        .subscribe({
          next: (creaturesData: ICreaturesListModel[]) => {
            this.creaturesList.set(creaturesData);
            this.loaderService.setLoading(false);
          },
          error: (error: Error) => {
            console.log(error);
            this.loaderService.setLoading(false);
          }
        });
    };

    // loadNextPageOfCreatures(): void {
    //   if (this._currentPage() * this._chunkSize < this._creaturesList().length) {
    //     this._currentPage.set(this._currentPage() + 1);
    //   }
    // }
}
