import { Component, OnInit } from '@angular/core';
import { IBossesRequestDTO, IBossesListWebDTO } from '../../interfaces/IBossesList';
import { CreaturesService } from '../../services/creatures.service';
import { BehaviorSubject } from 'rxjs';
import { BossesListMapper } from '../../mappers/bossesListMapper';

@Component({
  selector: 'app-bosses-list',
  templateUrl: './bosses-list.component.html',
  styleUrls: ['./bosses-list.component.scss']
})

export class BossesListComponent implements OnInit {

  constructor(private _creaturesService: CreaturesService) {}

  private bossesMapper = new BossesListMapper();

  private _bossesList: IBossesListWebDTO[] = [];
  public visibleData: IBossesListWebDTO[] = []; // Dados visíveis no scroll
  private _chunkSize = 10; // Quantidade de dados a serem exibidos por vez
  private _currentPage = 1;
  public isLoading = new BehaviorSubject<boolean>(false);
  public btnTitle: string = 'Ver mais';

  ngOnInit(): void {
    this.getBossesListData();
  };

  getBossesListData(): void {
    this.isLoading.next(true)
    this._creaturesService.getAllBosses().subscribe({
      next: (data: IBossesRequestDTO) => {
        this.handleBossesListData(data);
      },
      error: (error) => {
        console.log(error)
        this.isLoading.next(false);
      }
    });
  };

  handleBossesListData(data: IBossesRequestDTO): void {
    const newData = data.boostable_bosses.boostable_boss_list
    this._bossesList = this.bossesMapper.mapTo(newData)
    this.loadNextChunk();
    this.isLoading.next(false);
  }

  loadNextChunk(): void {
    const startIndex: number = (this._currentPage - 1) * this._chunkSize;
    const endIndex: number = startIndex + this._chunkSize;
    if (startIndex < this._bossesList.length) {
      this.visibleData = this._bossesList.slice(0, endIndex);
      this._currentPage++;
    };
  };
}
