import { IBaseInformation } from "../../../Interfaces/IBaseInformation"

export interface ICreatures extends IBaseInformation {
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

export interface ICreaturesList {
  featured: boolean,
  image_url: string,
  name: string,
  race: string
}
