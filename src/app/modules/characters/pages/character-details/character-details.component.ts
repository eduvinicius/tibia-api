import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { CharactersService } from '../../services/characters.service';

import { ICharacter, ICharacterData } from '../../interfaces/ICharacters';

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

  character: ICharacter | undefined;
  characterID: string = '';
  isLoading: boolean | undefined;

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.characterID = params['id'];
    })
    this.fetchCharacterData();
  }

  fetchCharacterData() {
    this.isLoading = true;
    this.characterService.getCharByName(this.characterID).subscribe({
      next: (data: ICharacterData) => {
        this.character = data.characters
        this.isLoading = false;
      },
      error: (error) => {
        console.log(error);
        this.isLoading = false;
      }
    })
  }

  formatData(data: string): string {
    const newData: Date = new Date(data);
    return newData.toLocaleString("pt-BR")
   }

   hasComment(comment: string): string {
    return comment ? comment : comment = 'Não há comentário'
   }

}
