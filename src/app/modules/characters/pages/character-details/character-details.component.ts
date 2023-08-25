import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { CharactersService } from '../../services/characters.service';

import { ICharacterRequestDTO, ICharacterWebDTO } from '../../interfaces/ICharacters';
import { CharacterMapper } from '../../mappers/characterMapper';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.scss']
})
export class CharacterDetailsComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private characterService: CharactersService
  ) {}

  private _characterMapper = new CharacterMapper();
  public character: ICharacterWebDTO | undefined;
  private _characterID: string = '';
  public isLoading = new BehaviorSubject<boolean>(false);

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this._characterID = params['id'];
    })
    this.getCharacterById();
  }

  getCharacterById(): void {
    this.isLoading.next(true)
    this.characterService.getCharByName(this._characterID).subscribe({
      next: (data: ICharacterRequestDTO) => {
        this.handleCharacterData(data);
        this.isLoading.next(false)
      },
      error: (error) => {
        console.log(error);
        this.isLoading.next(false)
      }
    })
  }

  handleCharacterData(data: ICharacterRequestDTO): void {
    const newData = this._characterMapper.mapTo(data);
    this.character = newData
  }
}
