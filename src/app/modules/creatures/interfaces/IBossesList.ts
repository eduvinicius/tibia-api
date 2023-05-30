import { IBaseInformation } from "../../../Interfaces/IBaseInformation";

export interface IBosses extends IBaseInformation {
  boostable_bosses: {
    boostable_boss_list: {
      featured: boolean;
      image_url: string;
      name: string;
    }[];
    boosted: {
      featured: boolean;
      image_url: string;
      name: string;
    };
  };
}

export interface IBossesList {
  featured: boolean;
  image_url: string;
  name: string;
}
