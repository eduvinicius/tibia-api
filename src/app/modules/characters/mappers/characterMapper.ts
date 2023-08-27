import { ICharacterResponseDTO, ICharacterModel } from "../interfaces/ICharacters";


export class CharacterMapper {

  mapFrom(character: ICharacterResponseDTO): ICharacterModel {
    return {
      name: character.characters.character.name,
      sex: character.characters.character.sex,
      vocation: character.characters.character.vocation,
      level: character.characters.character.level,
      achievementPoints: character.characters.character.achievement_points,
      world: character.characters.character.world,
      residence: character.characters.character.residence,
      last_login: character.characters.character.last_login,
      accountStatus: character.characters.character.account_status,
      comment: character.characters.character.comment,
      created:character.characters.account_information.created
    }
  }
}
