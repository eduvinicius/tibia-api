import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { CharactersService } from '../../services/characters.service';

import { ICharacterModel } from '../../interfaces/ICharacters';
import { BehaviorSubject, Observable, Subject, take } from 'rxjs';

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

  private _character = new Subject<ICharacterModel>;
  private _characterID: string = '';
  public isLoading = new BehaviorSubject<boolean>(false);

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this._characterID = params['id'];
    })
    this.getCharacterById();
  }

  get character(): Observable<ICharacterModel> {
    return this._character.asObservable().pipe(take(1));
  }

  getCharacterById(): void {
    this.isLoading.next(true)
    this.characterService.getCharByName(this._characterID).subscribe({
      next: (response: ICharacterModel) => {
        this.handleCharacterData(response);
      },
      error: (error) => {
        console.log(error);
        this.isLoading.next(false)
      }
    })
  }

  handleCharacterData(data: ICharacterModel): void {
    this._character.next(data);
    this.isLoading.next(false);
  }
}
