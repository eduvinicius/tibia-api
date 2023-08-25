import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ICreaturesListModel } from '../../interfaces/ICreaturesList';
import { CreaturesService } from '../../services/creatures.service';

@Component({
  selector: 'app-creatures',
  templateUrl: './creatures.component.html',
  styleUrls: ['./creatures.component.scss']
})

export class CreaturesComponent implements OnInit {

    constructor(
      private readonly _creaturesService: CreaturesService,
    ) {}

    private readonly _creaturesList = new BehaviorSubject<ICreaturesListModel[]>([]);
    public visibleCreatures = new BehaviorSubject<ICreaturesListModel[]>([]);

    private readonly _chunkSize: number = 10;
    private _currentPage: number = 1;

    public isLoading = new BehaviorSubject<boolean>(false);
    public btnTitle: string = 'Ver mais';

    ngOnInit(): void {
      this.getCreaturesListData();
    };

    getCreaturesListData(): void {
      this.isLoading.next(true)
      this._creaturesService.getAllCreatures().subscribe({
        next: (creaturesData: ICreaturesListModel[]) => {
          this.handleCreaturesData(creaturesData)
        },
        error: (error: Error) => {
          console.log(error);
          this.isLoading.next(false)
        }
      });
    };

    handleCreaturesData(creaturesData: ICreaturesListModel[]): void {
      this._creaturesList.next(creaturesData);
      this.loadNextPageOfCreatures();
      this.isLoading.next(false)
    }

    loadNextPageOfCreatures(): void {
      const startIndex: number = (this._currentPage - 1) * this._chunkSize;
      const endIndex: number = startIndex + this._chunkSize;
      let creaturesList: ICreaturesListModel[] = this._creaturesList.value;
      if (startIndex < creaturesList.length) {
        this.visibleCreatures.next(creaturesList.slice(0, endIndex))
        this._currentPage++;
      };
    };
}
