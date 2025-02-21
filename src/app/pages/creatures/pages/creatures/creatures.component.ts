import { Component, OnInit, signal } from '@angular/core';
import { BehaviorSubject, Observable} from 'rxjs';
import { ICreaturesListModel } from '../../interfaces/ICreaturesList';
import { CreaturesService } from '../../services/creatures.service';
import { LoaderService } from 'src/app/shared/services/loader.service';
import { LoaderComponent } from 'src/app/shared/components/loader/loader.component';
import { CreaturesListComponent } from '../../components/creatures-list/creatures-list.component';
import { ButtonComponent } from '../../components/button/button.component';
import { AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-creatures',
    templateUrl: './creatures.component.html',
    styleUrls: ['./creatures.component.css'],
    standalone: true,
    imports: [LoaderComponent, CreaturesListComponent, ButtonComponent, AsyncPipe, RouterLink]
})

export class CreaturesComponent implements OnInit {

    constructor(
      private readonly _creaturesService: CreaturesService,
      public loaderService: LoaderService
    ) {}

    private readonly _creaturesList$ = new BehaviorSubject<ICreaturesListModel[]>([]);
    private readonly _visibleCreatures$ = new BehaviorSubject<ICreaturesListModel[]>([]);
    private readonly _chunkSize: number = 10;

    private readonly _currentPage = signal<number>(1);
    public btnTitle = signal<string>('Ver mais');
    public visibleCreatures = signal<Observable<ICreaturesListModel[]>>(this._visibleCreatures$);

    ngOnInit(): void {
      this.getCreaturesListData();
    };

    getCreaturesListData(): void {
      this.loaderService.setLoading(true);
       this._creaturesService.getAllCreatures().subscribe({
        next: (creaturesData: ICreaturesListModel[]) => {
          this.handleCreaturesData(creaturesData)
        },
        error: (error: Error) => {
          console.log(error);
          this.loaderService.setLoading(false);
        }
      });
    };

    handleCreaturesData(creaturesData: ICreaturesListModel[]): void {
      this._creaturesList$.next(creaturesData);
      this.loadNextPageOfCreatures();
      this.loaderService.setLoading(false);
    }

    loadNextPageOfCreatures(): void {
      const startIndex: number = (this._currentPage() - 1) * this._chunkSize;
      const endIndex: number = startIndex + this._chunkSize;
      let creaturesList: ICreaturesListModel[] = this._creaturesList$.value;
      if (startIndex < creaturesList.length) {
        this._visibleCreatures$.next(creaturesList.slice(0, endIndex))
        this._currentPage.set(this._currentPage() + 1);
      };
    };
}
