import { Component, OnInit } from '@angular/core';
import { WorldsService } from '../../services/worlds.service';
import { IRegularWorlds, IWorlds } from '../../interfaces/IWorlds';

@Component({
  selector: 'app-worlds',
  templateUrl: './worlds.component.html',
  styleUrls: ['./worlds.component.scss']
})
export class WorldsComponent implements OnInit {


  constructor(private worldService: WorldsService) {}

  worlds: IRegularWorlds[] = []

  ngOnInit(): void {
    this.worldService.getWorlds().subscribe((world: IWorlds) => {
      this.worlds = world.worlds.regular_worlds
    })
  }

}
