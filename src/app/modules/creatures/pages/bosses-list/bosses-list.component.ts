import { Component, OnInit } from '@angular/core';
import { IBosses, IBossesList } from '../../interfaces/IBossesList';
import { CreaturesService } from '../../services/creatures.service';

@Component({
  selector: 'app-bosses-list',
  templateUrl: './bosses-list.component.html',
  styleUrls: ['./bosses-list.component.scss']
})

export class BossesListComponent implements OnInit {

  constructor(private creaturesService: CreaturesService) {}

  bossesList: IBossesList[] = []
  visibleData: IBossesList[] = []; // Dados visíveis no scroll
  chunkSize = 10; // Quantidade de dados a serem exibidos por vez
  currentPage = 1;
  isLoading: boolean = false;
  btnTitle: string = 'Ver mais';

  ngOnInit(): void {
    this.fetchBossesData();
  };

  fetchBossesData() {
    this.isLoading = true;
    this.creaturesService.getBosses().subscribe({
      next: (data: IBosses) => {
        this.bossesList = data.boostable_bosses.boostable_boss_list;
        this.loadNextChunk();
        this.isLoading = false;
      },
      error: (error) => {
        console.log(error)
        this.isLoading = false;
      }
    });
  };


  loadNextChunk() {
    const startIndex = (this.currentPage - 1) * this.chunkSize;
    const endIndex = startIndex + this.chunkSize;
    if (startIndex < this.bossesList.length) {
      this.visibleData = this.bossesList.slice(0, endIndex);
      this.currentPage++;
    };
  };
}
