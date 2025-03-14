import { IBaseInformation } from "src/app/shared/Interfaces/IBaseInformation";

export interface ICharacterResponseDTO extends IBaseInformation {
  character: {
    character: {
      name: string;
      sex: string;
      title: string;
      unlocked_titles: number;
      vocation: string;
      level: number;
      achievement_points: number;
      world: string;
      residence: string;
      married_to: string;
      guild: {
        name: string;
        rank: string;
      };
      last_login: string;
      account_status: string;
      comment: string;
    };
    achievements: {
      name: string;
      grade: number;
      secret: boolean;
    }[];
    account_information: {
      created: string;
      loyalty_title: string;
    };
    other_characters: {
      name: string;
      world: string;
      status: string;
      deleted: boolean;
      main: boolean;
      traded: boolean;
    }[];
  };
}

export interface ICharacterModel {
  name: string;
  sex: string;
  vocation: string;
  level: number;
  achievementPoints: number;
  world: string;
  residence: string;
  last_login: string;
  accountStatus: string;
  comment: string;
  created: string;
}
