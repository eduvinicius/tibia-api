export interface CreaturesAPI {
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
  information: {
    api_version: number,
    timestamp: string
  }
}

export interface CreatureList {
  featured: boolean,
  image_url: string,
  name: string,
  race: string
}
