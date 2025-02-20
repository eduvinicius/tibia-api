import { Component, OnInit } from '@angular/core';
import { WorldsService } from '../../services/worlds.service';
import { IRegularWorlds, IWorlds } from '../../interfaces/IWorlds';

@Component({
    selector: 'app-worlds',
    templateUrl: './worlds.component.html',
    styleUrls: ['./worlds.component.css'],
    standalone: false
})

export class WorldsComponent implements OnInit {


  constructor(private worldService: WorldsService) {}

  worlds: IRegularWorlds[] = []
  isLoading: boolean | undefined;

  ngOnInit(): void {
    this.isLoading = true;
    this.worldService.getWorlds().subscribe({
     next: (world: IWorlds) => {
        this.worlds = world.worlds.regular_worlds;
        this.isLoading = false;
      },
      error: (error) => {
        console.log(error);
        this.isLoading = false;
      }
    });
  };
}
