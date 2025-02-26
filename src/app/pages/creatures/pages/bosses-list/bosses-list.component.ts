import { Component, computed, DestroyRef, inject, OnInit, signal } from '@angular/core';

import { takeUntilDestroyed } from '@angular/core/rxjs-interop'

import { IBossesListModel } from '../../interfaces/IBossesList';

import { CreaturesService } from 'src/app/shared/services/api/creatures.service';
import { LoaderService } from 'src/app/shared/services/loader.service';

import { LoaderComponent } from 'src/app/shared/components/loader/loader.component';
import { ButtonComponent } from '../../components/button/button.component';

@Component({
    selector: 'app-bosses-list',
    templateUrl: './bosses-list.component.html',
    styleUrls: ['./bosses-list.component.css'],
    standalone: true,
    imports: [LoaderComponent, ButtonComponent]
})

export class BossesListComponent implements OnInit {

  constructor(
    private readonly _creaturesService: CreaturesService,
    public loaderService: LoaderService
    ) {}

  private readonly _bossesList = signal<IBossesListModel[]>([]);
  private readonly _chunkSize: number = 10;
  private readonly _currentPage = signal<number>(1);
  private readonly _destroyRef = inject(DestroyRef);

  public btnTitle = signal<string>('Ver mais');
  public visibleBosses = computed(() => {
        const startIndex = 0;
        const endIndex = this._currentPage() * this._chunkSize;
        return this._bossesList().slice(startIndex, endIndex);
      });


  ngOnInit(): void {
    this._getBossesListData();
  };

  private _getBossesListData(): void {
    this.loaderService.setLoading(true);
    this._creaturesService.getAllBosses()
      .pipe(takeUntilDestroyed(this._destroyRef))
      .subscribe({
      next: (data: IBossesListModel[]) => {
        this._bossesList.set(data);
        this.loaderService.setLoading(false);
      },
      error: (error) => {
        console.log(error)
        this.loaderService.setLoading(false);
      }
    });
  };

  public loadNextBossPage(): void {
    if (this._currentPage() * this._chunkSize < this._bossesList().length) {
      this._currentPage.set(this._currentPage() + 1);
    }
  };
}
