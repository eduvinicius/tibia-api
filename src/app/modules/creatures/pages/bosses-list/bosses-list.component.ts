import { Component, OnInit } from '@angular/core';
import { IBossesListModel } from '../../interfaces/IBossesList';
import { CreaturesService } from '../../services/creatures.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-bosses-list',
  templateUrl: './bosses-list.component.html',
  styleUrls: ['./bosses-list.component.scss']
})

export class BossesListComponent implements OnInit {

  constructor(private _creaturesService: CreaturesService) {}

  private readonly _bossesList = new BehaviorSubject<IBossesListModel[]>([]);
  private _visibleBosses = new BehaviorSubject<IBossesListModel[]>([]);
  private readonly _chunkSize: number = 10;
  private _currentPage: number = 1;
  public isLoading = new BehaviorSubject<boolean>(false);
  public btnTitle: string = 'Ver mais';

  ngOnInit(): void {
    this.getBossesListData();
  };

  get visibleBosses(): BehaviorSubject<IBossesListModel[]> {
    return this._visibleBosses
  }

  getBossesListData(): void {
    this.isLoading.next(true)
    this._creaturesService.getAllBosses().subscribe({
      next: (data: IBossesListModel[]) => {
        this.handleBossesListData(data);
      },
      error: (error) => {
        console.log(error)
        this.isLoading.next(false);
      }
    });
  };

  handleBossesListData(data: IBossesListModel[]): void {
    this._bossesList.next(data)
    this.loadNextBossPage();
    this.isLoading.next(false);
  }

  loadNextBossPage(): void {
    const startIndex: number = (this._currentPage - 1) * this._chunkSize;
    const endIndex: number = startIndex + this._chunkSize;
    const bossesList: IBossesListModel[] = this._bossesList.value
    if (startIndex < bossesList.length) {
      this._visibleBosses.next(bossesList.slice(0, endIndex));
      this._currentPage++;
    };
  };
}
