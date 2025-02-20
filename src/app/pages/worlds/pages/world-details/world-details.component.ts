import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WorldsService } from '../../services/worlds.service';
import { IWorldDetails, IWorldsDetails } from '../../interfaces/IWorldDetails';
import { LoaderComponent } from 'src/app/shared/components/loader/loader.component';
import { OnlinePlayersTableComponent } from '../../components/online-players-table/online-players-table.component';

@Component({
    selector: 'app-world-details',
    templateUrl: './world-details.component.html',
    styleUrls: ['./world-details.component.css'],
    standalone: true,
    imports: [LoaderComponent, OnlinePlayersTableComponent]
})

export class WorldDetailsComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private worldService: WorldsService
  ) {}

  world: string = '';
  worldDetails: IWorldDetails | undefined;
  isLoading: boolean | undefined;

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.world = params['id']
    })
    this.fetchWorldData()
  };

  fetchWorldData() {
    this.isLoading = true;
    this.worldService.getWorldByName(this.world).subscribe({
      next: (data: IWorldsDetails) => {
        this.worldDetails = data.worlds;
        this.isLoading = false;
      },
      error: (error) => {
        console.log(error);
        this.isLoading = false;
      }
    });
  };

  formatArray(arr: string[]): string {
    return arr.join(', ')
  };

  formatData(date: string): string {
    const newDate = new Date(date);
    return newDate.toLocaleDateString('pt-BR')
  };
}
