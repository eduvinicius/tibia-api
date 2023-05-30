import { IBaseInformation } from "src/app/Interfaces/IBaseInformation";

export interface IMemberDetails extends IBaseInformation {
  characters: {
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
