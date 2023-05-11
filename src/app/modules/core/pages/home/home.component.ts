import { Component, OnInit } from '@angular/core';
import { CreaturesAPI } from 'src/interfaces/creatureInterface';
import { CreatureList } from 'src/interfaces/creatureInterface';
import { CreaturesService } from 'src/app/services/creatures.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  creatureList: CreatureList[] = []

  constructor(private creatures: CreaturesService) {}

  ngOnInit(): void {
    this.creatures.getCreatures().subscribe((data: CreaturesAPI) => {
      this.creatureList = data.creatures.creature_list
    })
  }

}
