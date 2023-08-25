import { IBaseInformation } from "../../../Interfaces/IBaseInformation"

export interface ICreaturesResponseDTO extends IBaseInformation {
  creatures: {
    boosted: {
      featured: boolean,
      image_url: string,
      name: string,
      race: string
    },
    creature_list: [
      {
        featured: boolean,
        image_url: string,
        name: string,
        race: string
      }
    ]
  },
}

export interface ICreaturesListResponseDTO {
  featured: boolean,
  image_url: string,
  name: string,
  race: string
}

export interface ICreaturesListModel {
  image: string,
  name: string,
  race: string
}
