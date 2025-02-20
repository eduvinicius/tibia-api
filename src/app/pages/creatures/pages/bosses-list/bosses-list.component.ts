import { Component, OnDestroy, OnInit } from '@angular/core';
import { IBossesListModel } from '../../interfaces/IBossesList';
import { CreaturesService } from '../../services/creatures.service';
import { LoaderService } from 'src/app/shared/services/loader.service';
import { BehaviorSubject, Subscription } from 'rxjs';
import { LoaderComponent } from 'src/app/shared/components/loader/loader.component';
import { ButtonComponent } from '../../components/button/button.component';
import { AsyncPipe } from '@angular/common';

@Component({
    selector: 'app-bosses-list',
    templateUrl: './bosses-list.component.html',
    styleUrls: ['./bosses-list.component.css'],
    standalone: true,
    imports: [LoaderComponent, ButtonComponent, AsyncPipe]
})

export class BossesListComponent implements OnInit, OnDestroy {

  constructor(
    private _creaturesService: CreaturesService,
    public loaderService: LoaderService
    ) {}

  private readonly _bossesList$ = new BehaviorSubject<IBossesListModel[]>([]);
  private _visibleBosses$ = new BehaviorSubject<IBossesListModel[]>([]);
  public visibleBosses$ = this._visibleBosses$.asObservable();
  private readonly _chunkSize: number = 10;
  private _currentPage: number = 1;
  private _subscription!: Subscription;
  public btnTitle: string = 'Ver mais';

  ngOnInit(): void {
    this._getBossesListData();
  };

  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }

  public trackBossesList(index: number): number {
    return index;
  }

  private _getBossesListData(): void {
    this.loaderService.setLoading(true);
    this._subscription = this._creaturesService.getAllBosses().subscribe({
      next: (data: IBossesListModel[]) => {
        this._handleBossesListData(data);
      },
      error: (error) => {
        console.log(error)
        this.loaderService.setLoading(false);
      }
    });
  };

  private _handleBossesListData(data: IBossesListModel[]): void {
    this._bossesList$.next(data)
    this.loadNextBossPage();
    this.loaderService.setLoading(false);
  }

  public loadNextBossPage(): void {
    const startIndex: number = (this._currentPage - 1) * this._chunkSize;
    const endIndex: number = startIndex + this._chunkSize;
    const bossesList: IBossesListModel[] = this._bossesList$.value
    if (startIndex < bossesList.length) {
      this._visibleBosses$.next(bossesList.slice(0, endIndex));
      this._currentPage++;
    };
  };
}
