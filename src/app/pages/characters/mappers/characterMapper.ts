import { ICharacterResponseDTO, ICharacterModel } from "../interfaces/ICharacters";


export class CharacterMapper {

  mapFrom(character: ICharacterResponseDTO): ICharacterModel {
    return {
      name: character.character.character.name,
      sex: character.character.character.sex,
      vocation: character.character.character.vocation,
      level: character.character.character.level,
      achievementPoints: character.character.character.achievement_points,
      world: character.character.character.world,
      residence: character.character.character.residence,
      last_login: character.character.character.last_login,
      accountStatus: character.character.character.account_status,
      comment: character.character.character.comment,
      created:character.character.account_information.created
    }
  }
}
