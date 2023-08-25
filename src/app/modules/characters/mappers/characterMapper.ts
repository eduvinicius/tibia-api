import { ICharacterRequestDTO, ICharacterWebDTO } from "../interfaces/ICharacters";


export class CharacterMapper {

  mapTo(character: ICharacterRequestDTO): ICharacterWebDTO {
    return {
      name: character.characters.character.name,
      sex: character.characters.character.sex,
      vocation: character.characters.character.vocation,
      level: character.characters.character.level,
      achievement_points: character.characters.character.achievement_points,
      world: character.characters.character.world,
      residence: character.characters.character.residence,
      last_login: character.characters.character.last_login,
      account_status: character.characters.character.account_status,
      comment: character.characters.character.comment,
      created:character.characters.account_information.created
    }
  }
}
