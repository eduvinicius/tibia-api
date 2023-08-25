import { IBaseInformation } from "../../../Interfaces/IBaseInformation";

export interface IBossesRequestDTO extends IBaseInformation {
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

export interface IBossesListRequestDTO {
  featured: boolean;
  image_url: string;
  name: string;
}

export interface IBossesListWebDTO {
  image: string,
  name: string
}
