import { RouterLink } from '@angular/router';
import { Component, computed, OnInit, signal } from '@angular/core';

import { ICreaturesListModel } from '../../interfaces/ICreaturesList';

import { CreaturesService } from '../../../../core/api/creatures.service';
import { LoaderService } from 'src/app/shared/services/loader.service';

import { LoaderComponent } from 'src/app/shared/components/loader/loader.component';
import { CreaturesListComponent } from '../../components/creatures-list/creatures-list.component';
import { ButtonComponent } from '../../components/button/button.component';
@Component({
    selector: 'app-creatures',
    templateUrl: './creatures.component.html',
    styleUrls: ['./creatures.component.css'],
    standalone: true,
    imports: [LoaderComponent, CreaturesListComponent, ButtonComponent, RouterLink]
})

export class CreaturesComponent implements OnInit {

    constructor(
      private readonly _creaturesService: CreaturesService,
      public loaderService: LoaderService
    ) {}

    private readonly _creaturesList = signal<ICreaturesListModel[]>([]);
    private readonly _chunkSize: number = 10;
    private readonly _currentPage = signal<number>(1);

    public btnTitle = signal<string>('Ver mais');

    public visibleCreatures = computed(() => {
      const startIndex = 0;
      const endIndex = this._currentPage() * this._chunkSize;
      return this._creaturesList().slice(startIndex, endIndex);
    });

    ngOnInit(): void {
      this.getCreaturesListData();
    };

    getCreaturesListData(): void {
      this.loaderService.setLoading(true);
       this._creaturesService.getAllCreatures().subscribe({
        next: (creaturesData: ICreaturesListModel[]) => {
          this._creaturesList.set(creaturesData);
          this.loaderService.setLoading(false);
        },
        error: (error: Error) => {
          console.log(error);
          this.loaderService.setLoading(false);
        }
      });
    };

    loadNextPageOfCreatures(): void {
      if (this._currentPage() * this._chunkSize < this._creaturesList().length) {
        this._currentPage.set(this._currentPage() + 1);
      }
    }
}
