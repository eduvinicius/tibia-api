import { Component, OnInit } from '@angular/core';
import { ICreatures, ICreaturesList } from '../../interfaces/ICreaturesList';
import { CreaturesService } from '../../services/creatures.service';

@Component({
  selector: 'app-creatures',
  templateUrl: './creatures.component.html',
  styleUrls: ['./creatures.component.scss']
})

export class CreaturesComponent implements OnInit {

    constructor(private creaturesService: CreaturesService) {}

    creaturesList: ICreaturesList[] = [];
    visibleCreatures: ICreaturesList[] = []; // Dados visíveis no scroll
    chunkSize = 10; // Quantidade de dados a serem exibidos por vez
    currentPage = 1;
    isLoading: boolean = false;
    btnTitle: string = 'Ver mais';

    ngOnInit(): void {
      this.fetchCreatureData();
    };

    fetchCreatureData() {
      this.isLoading = true;
      this.creaturesService.getCreatures().subscribe({
        next: (data: ICreatures) => {
          this.creaturesList = data.creatures.creature_list;
          this.loadNextChunk();
          this.isLoading = false;
        },
        error: (error) => {
          console.log(error);
          this.isLoading = false;
        }
      });
    };

    loadNextChunk() {
      const startIndex = (this.currentPage - 1) * this.chunkSize;
      const endIndex = startIndex + this.chunkSize;
      if (startIndex < this.creaturesList.length) {
        this.visibleCreatures = this.creaturesList.slice(0, endIndex);
        this.currentPage++;
      };
    };
}
